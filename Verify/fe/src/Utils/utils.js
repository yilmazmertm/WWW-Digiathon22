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

export async function controlDocument(documentHash, documentId, {setData}) {
  try {
    let walletAddress = await contract.methods
      .isRegisteredDocument(
        "0x8bbc4e9197c3f547cb5384280f89c90e248c30bcf34803a8e4eb2a845f79afe4",
        "TR01-121122-0016-343634457-8695431367936345"
      )
      .call();

    api.get(`get-authority/${walletAddress}`).then((response) => {
      console.log(response.data.data);
      setData(response.data.data)
    });
  } catch (e) {
    return null;
  }
}
