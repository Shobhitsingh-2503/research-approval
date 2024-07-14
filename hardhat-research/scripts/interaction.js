const { ethers } = require("hardhat");
const { abi } = require("../artifacts/contracts/Research.sol/Research.json");

async function main() {
  const provider = new ethers.JsonRpcProvider("HTTP://127.0.0.1:7545");
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(
    "0x5507326d812a755a9A6cB5cA6C29e50736771c1b",
    abi,
    signer
  );
  await contract
    .submitPaper("Magnetism and its causes", "Shobhit", "c")
    .then((res) => {
      console.log(res);
    });
  //   await contract.getPapers().then((res) => {
  //     console.log(res);
  //   });
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });