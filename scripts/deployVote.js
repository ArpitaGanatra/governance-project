const main = async () => {
  try {
    const votingContractFactory = await hre.ethers.getContractFactory("Voting");
    const votingContract = await votingContractFactory.deploy();

    console.log("Contract deployed to: ", votingContract.address);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();

//vote address mumbai = 0x66C9E8E30A2892BFBF8E5430A4059d6b24aDd5c5
