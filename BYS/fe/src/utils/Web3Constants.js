import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import Web3 from "web3";

export function getWeb3Modal() {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {},
      },
    },
  };

  const web3Modal = new Web3Modal({
    cacheProvider: true,
    disableInjectedProvider: false,
    providerOptions: providerOptions,
  });

  return web3Modal;
}

export async function getWeb3Object() {
  try {
    const web3Modal = getWeb3Modal();
    let provider = await web3Modal.connect();
    let web3 = new Web3(provider);
    return web3;
  } catch (e) {
    console.error(e);
  }
}
