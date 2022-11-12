import Web3 from "web3";
import { getWeb3Modal } from "./Web3Constants";

let web3;
let provider;


export async function walletConnect() {
  try {
    const web3Modal = getWeb3Modal();
    provider = await web3Modal.connect();
    web3 = new Web3(provider);
    accounts = await web3.eth.getAccounts();
    chainId = await web3.eth.net.getId();
  } catch (e) {
    console.error(e);
  }
}
