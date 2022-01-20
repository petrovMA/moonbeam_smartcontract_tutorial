async function main() {
   // We get the contract to deploy
   const Greeter = await ethers.getContractFactory('Greeter');
   console.log('Deploying...');

   // Instantiating a new smart contract
   const greeter = await Greeter.deploy("Hi!");

   // Waiting for the deployment to resolve
   await greeter.deployed();
   console.log('Greeter deployed to:', greeter.address);
}

main()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });