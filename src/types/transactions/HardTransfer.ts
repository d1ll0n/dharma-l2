import { ClassDef, BufferLike } from "../TypeDef";
import { DefinedClass, FieldsInput } from "../DefinedClass";
import { PrefixType, HardTransactionIndexType, ToIndexType, ValueType, StateRootType } from "./Overrides";


const HardTransferType = <ClassDef> {
  bytes: 49,
  fields: [
    PrefixType,                 // 1 byte
    HardTransactionIndexType,   // 5 bytes
    ToIndexType,                // 4 bytes
    ValueType,                  // 7 bytes
    StateRootType               // 32 bytes
  ]
}

export class HardTransfer extends DefinedClass {
  public prefix: number;
  public hardTransactionIndex: number;
  public toIndex: number;
  public value: number;
  public stateRoot: string;

  constructor(options: FieldsInput) {
    super(HardTransferType, options);
  }

  static decode(input: BufferLike): HardTransfer {
    return <HardTransfer> this._decode(input, HardTransferType);
  }
}