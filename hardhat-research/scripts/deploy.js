const { ethers } = require("hardhat");
const {
  abi,
  bytecode,
} = require("../artifacts/contracts/Research.sol/Research.json");
require("dotenv").config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.API_KEY);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const researchFactory = new ethers.ContractFactory(abi, bytecode, wallet);
  const research = await researchFactory.deploy();
  console.log(`deployed at ${research.target}`);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
  });
