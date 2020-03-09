import { StateSizeType, CurrencyAmountType, AddressType, NonceType } from './index';
import { BufferLike, ClassDef } from './TypeDef';
import { DefinedClass, FieldsInput } from './DefinedClass';

const AccountType = <ClassDef> {
  bytes: 30,
  fields: [
    AddressType,
    NonceType,
    {...CurrencyAmountType, name: 'balance'}
  ]
}

export class AccountOptions extends DefinedClass {
  accountIndex: Buffer | number | string;
  address: Buffer | number | string;
  nonce: Buffer | number | string;
  balance: Buffer | number | string;
}

export class Account extends DefinedClass {
  public address: string;
  public nonce: number;
  public balance: number;

  constructor(options: FieldsInput) {
    super(AccountType, options);
  }

  static decode(input: BufferLike): Account {
    return <Account> this._decode(input, AccountType);
  }
}