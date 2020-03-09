import { BufferLike, ClassDef } from './TypeDef';
import { toBuffer } from 'ethereumjs-util';
import { DefinedType } from './DefinedType';

export type FieldsInput = { [key: string]: BufferLike | DefinedType }
export type FieldValues = { [key: string]: DefinedType }

export class DefinedClass {
  private _classDef: ClassDef;
  private _values: FieldValues = {};

  get _fields(): string[] {
    return this._classDef.fields.map(f => f.name);
  }

  encode(): Buffer {
    let arr = [];
    for (let field of this._fields) {
      arr.push(this._values[field].toBuffer());
    }
    return Buffer.concat(arr, this._classDef.bytes);
  }

  constructor(classDef: ClassDef, values?: FieldsInput) {
    this._classDef = classDef;
    let totalSize = 0;
    for (let field of classDef.fields) {
      console.log(`putting field ${field.name} with value ${values[field.name]}`)
      console.log(field)
      totalSize += field.bytes;
      this._values[field.name] = new DefinedType(field, values[field.name])
      Object.defineProperty(this, field.name, {
        get: function(): DefinedType {
          return this._values[field.name].value;
        },
        set: function(input: BufferLike) {
          this._values[field.name].value = input;
        }
      })
    }
    if (totalSize != classDef.bytes) {
      throw new Error(`Bad \`bytes\` value in class definition. Class has ${classDef.bytes} but fields have ${totalSize}`);
    }
  }

  protected static _decode = (input: BufferLike, classDef: ClassDef): DefinedClass => {
    const v = toBuffer(input);
    let index = 0;
    let fields = {};
    for (let fieldType of classDef.fields) {
      const buf = v.slice(index, index + fieldType.bytes);
      index += fieldType.bytes;
      fields[fieldType.name] = new DefinedType(fieldType, buf);
    }
    return new DefinedClass(classDef, fields);
  }
}