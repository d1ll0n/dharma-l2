import { BufferLike, TypeDef } from './TypeDef';
import { toBuffer, bufferToHex, bufferToInt, setLength, unpad } from 'ethereumjs-util';
import * as BN from 'bn.js';

function checkLength(val: Buffer, length: number) {
  if (val.length > length) {
    throw new Error(`Input too large. Maximum ${length} bytes, value had ${val.length}`)
  }

  const v = setLength(val, length);
  console.log(`Did set len ${length} for ${val}`)
  return v;
}

export class DefinedType {
  protected typeDef: TypeDef;
  protected _value: Buffer;

  get name(): string {
    return this.typeDef.name;
  }

  get value(): BufferLike {
    switch(this.typeDef.defaultGetType || 'number') {
      case 'hex': return bufferToHex(this._value);
      case 'number': return bufferToInt(this._value);
      case 'buffer': return this._value;
      case 'bn': return new BN(this._value);
    }
  }

  set value(input: BufferLike) {
    let val: Buffer;
    const len = this.typeDef.bytes;
    if (Buffer.isBuffer(input)) val = checkLength(input, len)
    else val = checkLength(toBuffer(input), len);
    
    this._value = val;
  }

  encode = () => this.toBuffer()
  toNumber = () => bufferToInt(this._value);
  toHex = () => bufferToHex(unpad(this._value));
  toBuffer = () => this._value;

  constructor(typeDef: TypeDef, value?: BufferLike | DefinedType) {
    this.typeDef = typeDef;
    if (!value) {
      if (!typeDef.allowEmpty) throw new Error(`Null value for ${typeDef.name} not allowed by type.`);
      else this.value = typeDef.default || 0;
    }
    if (value instanceof DefinedType) {
      this.value = value.value;
    }
    else this.value = value;
  }
}

