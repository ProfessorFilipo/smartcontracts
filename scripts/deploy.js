async function main() {
   const ERC20test03 = await ethers.getContractFactory("ERC20test03");

   // Start deployment, returning a promise that resolves to a contract object
   const erc20test03 = await ERC20test03.deploy("ERC20test03", "ETT", 25500);   
   console.log("Contract deployed to address:", erc20test03.address);
   
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
