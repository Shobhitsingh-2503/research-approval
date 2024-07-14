export const DOMAIN = "https://bronze-elegant-gopher-211.mypinata.cloud";
export const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1ZGE0ODQxZi0yZDRhLTQ3YjktOTk3NC0xYTlmMmY2Mjg4YTAiLCJlbWFpbCI6InNob2JoaXRzaW5naDI1MDMyMDAzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI0MDUxOWE2M2ZkZjkzM2E2YzgzZiIsInNjb3BlZEtleVNlY3JldCI6ImE0YjExMWU4YWUzYTU4YTk0NjViOTg4NDAwMDBhMzgxODY4NTgxMGExY2MwYmQ2MGUzYTRlMmFjYWRmOTk0YzgiLCJleHAiOjE3NTIyMzkxNDB9.al_0JS90IlKVySHBcu4C6pYOeXuzZCPpjy8ys1mDy4E";
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
