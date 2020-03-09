import * as test from "tape";
import { Account } from '../src/types/Account';

test("Test Account", (t) => {
  let account: Account;
  let bytes: Buffer;

  t.test("Makes an account", (st) => {
    account = new Account({
      address: '0x' + 'ab'.repeat(20),
      nonce: 0,
      balance: 20
    });
    st.end();
  });

  t.test("Has the correct fields", (st) => {
    st.equals(account.nonce, 0);
    st.equals(account.address, '0x' + 'ab'.repeat(20));
    st.equals(account.balance, 20);
    st.end();
  });
  
  t.test("Encodes to buffer", (st) => {
    bytes = account.encode();
    st.equals(bytes.length, 30);
    st.end();
  })

  t.test("Decodes from buffer", (st) => {
    account = Account.decode(bytes);
    console.log(bytes)
    st.equals(account.nonce, 0);
    st.equals(account.address, '0x' + 'ab'.repeat(20));
    st.equals(account.balance, 20);
    st.end();
  })
  t.end();
})