import { TypeDef } from "../TypeDef";
import { StateSizeType } from "../StateSize";
import { CurrencyAmountType } from "../CurrencyAmount";
import { AddressType } from "../Address";
export {NonceType} from '../Nonce';

export const PrefixType = <TypeDef> {
  bytes: 1,
  defaultGetType: 'number',
  default: 0,
  allowEmpty: false,
  name: 'prefix'
}

export const HardTransactionIndexType = <TypeDef> {
  bytes: 5,
  defaultGetType: 'number',
  allowEmpty: false,
  default: Buffer.alloc(5, 0),
  name: 'hardTransactionIndex'
};

export const FromIndexType = <TypeDef> {
  ...StateSizeType,
  name: 'toIndex',
};

export const ToIndexType = <TypeDef> {
  ...StateSizeType,
  name: 'toIndex',
};

export const ValueType = <TypeDef> {
  ...CurrencyAmountType,
  name: 'value'
};

export const ToAddressType = <TypeDef> {
  ...AddressType,
  name: 'toAddress'
};

export const WithdrawalAddressType = <TypeDef> {
  ...AddressType,
  name: 'withdrawalAddress'
};

export const SigVType = <TypeDef> {
  bytes: 1,
  allowEmpty: false,
  name: 'sigV',
  defaultGetType: 'number'
};

export const SigRType = <TypeDef> {
  bytes: 32,
  allowEmpty: false,
  name: 'sigR',
  defaultGetType: 'hex'
};

export const SigSType = <TypeDef> {
  bytes: 32,
  allowEmpty: false,
  name: 'sigS',
  defaultGetType: 'hex'
};

export const SigTypes = <TypeDef[]> [
  SigVType,
  SigRType,
  SigSType
]

export const StateRootType = <TypeDef> {
  bytes: 32,
  defaultGetType: 'hex',
  allowEmpty: false,
  default: Buffer.alloc(5, 0),
  name: 'stateRoot'
};