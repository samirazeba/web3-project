const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying UBIDemo contract...");
  
  const UBIDemo = await ethers.getContractFactory("UBIDemo");
  const ubi = await UBIDemo.deploy();
  
  console.log("UBIDemo deploying to:", ubi.target);
  await ubi.waitForDeployment();
  console.log("UBIDemo deployed to:", ubi.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });