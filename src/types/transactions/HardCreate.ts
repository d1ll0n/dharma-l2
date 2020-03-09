import { ClassDef, BufferLike } from "../TypeDef";
import { DefinedClass, FieldsInput } from "../DefinedClass";

import { PrefixType, HardTransactionIndexType, ToIndexType, ValueType, ToAddressType, StateRootType } from './Overrides'

const HardCreateType = <ClassDef> {
  bytes: 69,
  fields: [
    PrefixType,               // 1 byte
    HardTransactionIndexType, // 5 bytes
    ToIndexType,              // 4 bytes
    ValueType,                // 7 bytes
    ToAddressType,            // 20 bytes
    StateRootType             // 32 bytes
  ]
}

export class HardCreate extends DefinedClass {
  public prefix: number;
  public hardTransactionIndex: number;
  public toIndex: number;
  public value: number;
  public toAddress: string;
  public stateRoot: string;

  constructor(options: FieldsInput) {
    super(HardCreateType, options);
  }

  static decode(input: BufferLike): HardCreate {
    return <HardCreate> this._decode(input, HardCreateType);
  }
}