import { ClassDef, BufferLike } from "../TypeDef";
import { DefinedClass, FieldsInput } from "../DefinedClass";

import { PrefixType, FromIndexType, ToIndexType, NonceType, ValueType, SigTypes, StateRootType, ToAddressType } from './Overrides'

const SoftCreateType = <ClassDef> {
  bytes: 136,
  fields: [
    PrefixType,     // 1 byte
    FromIndexType,  // 4 bytes
    ToIndexType,    // 4 bytes
    NonceType,      // 3 bytes
    ValueType,      // 7 bytes
    ToAddressType,  // 20 bytes
    ...SigTypes,    // 65 bytes
    StateRootType   // 32 bytes
  ]
}

export class SoftCreate extends DefinedClass {
  public prefix: number;
  public fromIndex: number;
  public toIndex: number;
  public nonce: number;
  public value: number;
  public toAddress: string;
  public sigV: number;
  public sigR: string;
  public sigS: string;
  public stateRoot: string;

  constructor(options: FieldsInput) {
    super(SoftCreateType, options);
  }

  static decode(input: BufferLike): SoftCreate {
    return <SoftCreate> this._decode(input, SoftCreateType);
  }
}