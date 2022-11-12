export function getAbi() {
  return [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "issuer",
          type: "address",
        },
      ],
      name: "Register",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "registrar",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "docHash",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "string",
          name: "documentId",
          type: "string",
        },
      ],
      name: "RegisterDocument",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "issuer",
          type: "address",
        },
      ],
      name: "Revoke",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "docHash",
          type: "bytes32",
        },
        {
          internalType: "string",
          name: "documentId",
          type: "string",
        },
      ],
      name: "isRegisteredDocument",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "issuer",
          type: "address",
        },
      ],
      name: "register",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "docHash",
          type: "bytes32",
        },
        {
          internalType: "string",
          name: "documentId",
          type: "string",
        },
      ],
      name: "registerDocument",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "issuer",
          type: "address",
        },
      ],
      name: "revoke",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
}
