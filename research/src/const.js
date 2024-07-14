export const deployedAddress = "0x3a3aE460a41B5cEa35F78F2cd1329C3015B29c06";
export const abi = [
  {
    inputs: [],
    name: "YouCannotRemoveThisPaper",
    type: "error",
  },
  {
    inputs: [],
    name: "alreadyVoted",
    type: "error",
  },
  {
    inputs: [],
    name: "undefinedIndex",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "adrs",
        type: "address",
      },
    ],
    name: "alreadyApproved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "deletePaper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPapers",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "topic",
            type: "string",
          },
          {
            internalType: "string",
            name: "auth",
            type: "string",
          },
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "approval",
            type: "uint256",
          },
        ],
        internalType: "struct Research.Paper[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "topic",
        type: "string",
      },
      {
        internalType: "string",
        name: "auth",
        type: "string",
      },
      {
        internalType: "string",
        name: "cid",
        type: "string",
      },
    ],
    name: "submitPaper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
