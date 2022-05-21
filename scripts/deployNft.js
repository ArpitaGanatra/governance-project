const main = async () => {
  try {
    const nftContractFactory = await hre.ethers.getContractFactory(
      "BirthCertificate"
    );
    const nftContract = await nftContractFactory.deploy();

    console.log("Contract deployed to: ", nftContract.address);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();

// nft address mumbai: 0x92bBdbA86C3344c23cBB2B21A6d6a83781604E2E
