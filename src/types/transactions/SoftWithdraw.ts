import { ClassDef, BufferLike } from "../TypeDef";

import { DefinedClass, FieldsInput } from "../DefinedClass";

import { FromIndexType, NonceType, ValueType, SigTypes, PrefixType, StateRootType, WithdrawalAddressType } from './Overrides'

const SoftWithdrawType = <ClassDef> {
  bytes: 132,
  fields: [
    PrefixType,             // 1 byte
    FromIndexType,          // 4 bytes
    WithdrawalAddressType,  // 20 bytes
    NonceType,              // 3 bytes
    ValueType,              // 7 bytes
    ...SigTypes,            // 65 bytes
    StateRootType           // 32 bytes
  ]
}

export class SoftWithdraw extends DefinedClass {
  public prefix: number;
  public fromIndex: number;
  public withdrawalAddress: string;
  public nonce: number;
  public value: number;
  public sigV: number;
  public sigR: string;
  public sigS: string;
  public stateRoot: string;

  constructor(options: FieldsInput) {
    super(SoftWithdrawType, options);
  }

  static decode(input: BufferLike): SoftWithdraw {
    return <SoftWithdraw> this._decode(input, SoftWithdrawType);
  }
}