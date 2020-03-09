import { ClassDef, BufferLike } from "../TypeDef";

import { DefinedClass, FieldsInput } from "../DefinedClass";

import { FromIndexType, ToIndexType, NonceType, ValueType, SigTypes, PrefixType, StateRootType } from './Overrides'

const SoftTransferType = <ClassDef> {
  bytes: 116,
  fields: [
    PrefixType,     // 1 byte
    FromIndexType,  // 4 bytes
    ToIndexType,    // 4 bytes
    NonceType,      // 3 bytes
    ValueType,      // 7 bytes
    ...SigTypes,    // 65 bytes
    StateRootType   // 32 bytes
  ]
}

export class SoftTransfer extends DefinedClass {
  public prefix: number;
  public fromIndex: number;
  public toIndex: number;
  public nonce: number;
  public value: number;
  public sigV: number;
  public sigR: string;
  public sigS: string;
  public stateRoot: string;

  constructor(options: FieldsInput) {
    super(SoftTransferType, options);
  }

  static decode(input: BufferLike): SoftTransfer {
    return <SoftTransfer> this._decode(input, SoftTransferType);
  }
}