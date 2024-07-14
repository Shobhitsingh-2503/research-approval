export const deployedAddress = "0x3e2633b032711aaD38280c7E4a4A41300CE2b5e5";
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
