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
//updated version = 0xda4f5C93B82eEf69dC453e7711B779391F50e66E
// 0xE33f0E08982808173E8383eD128022fd265c1C5F
// 0x93E83689b2082151cc7952480258eD4B42156562 (this one the best version)
