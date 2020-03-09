import BN = require("bn.js");

export interface TypeDef {
  bytes: number;
  allowEmpty?: boolean;
  default?: BufferLike;
  defaultGetType?: 'hex' | 'number' | 'buffer' | 'bn';
  name: string;
}

export interface ClassDef {
  bytes: number;
  fields: TypeDef[];
}

export type BufferLike = number | string | Buffer | BN;