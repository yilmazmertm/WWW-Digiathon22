import Web3 from "web3";
import { getWeb3Modal } from "./Web3Constants";
import axios from "axios";

let web3;
let provider;

const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export async function walletConnect() {
  let text = null;
  let account = null;
  try {
    const web3Modal = getWeb3Modal();
    provider = await web3Modal.connect();
    web3 = new Web3(provider);
    let accounts = await web3.eth.getAccounts();
    account = accounts[0];
  } catch (e) {
    console.error(e);
  }

  await api.get(`get-text-to-sign/${account}`).then((response) => {
    text = response.data.data;
  });
  console.log(text);

  let signedMessage = await web3.eth.personal.sign(text, account);

  api.get(`verify-signature/${account}/${signedMessage}`);

  return account;
}
