import { getAbi } from "./abiGetter";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8000/api/" });

var Web3 = require("web3");
var web3 = new Web3(
  new Web3.providers.HttpProvider("http://176.236.121.139:9656/ext/bc/C/rpc")
);
var contract = new web3.eth.Contract(
  getAbi(),
  "0x422525b585B581C54681B75A9E7a37447Bfc375d"
);

export async function controlDocument(documentHash, documentId, { setData }) {
  try {
    let walletAddress = await contract.methods
      .isRegisteredDocument("0x" + documentHash, documentId)
      .call();
    console.log(walletAddress);
    api.get(`get-authority/${walletAddress}`).then((response) => {
      setData(response.data.data);
    });
  } catch (e) {
    setData(null);
    console.error(e);
    return null;
  }
}
