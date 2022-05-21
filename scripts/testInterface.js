// interface testing js

const hre = require("hardhat");

async function main() {
  // Get example accounts
  const [owner, people, people2, people3] = await hre.ethers.getSigners();

  // Get the contract to deploy & deploy
  const BirthCertificateNft = await hre.ethers.getContractFactory(
    "BirthCertificate"
  );
  const birthCertificate = await BirthCertificateNft.deploy();
  await birthCertificate.deployed;
  console.log("birthCertificate deployed to ", birthCertificate.address);

  const NewContract = await hre.ethers.getContractFactory("SimpleContract");
  const newContract = await NewContract.deploy();
  await newContract.deployed;
  console.log("newContract deployed to ", newContract.address);

  // set birthCertificate address on newContract
  await newContract
    .connect(owner)
    .setBirthCertificateAddress(birthCertificate.address);

  // mint

  // mint people age over 18
  await birthCertificate
    .connect(owner)
    .mint(owner.address, "Anon", "Earth Hospital", "Earth", 12839289);

  // mint people age below 18
  await birthCertificate
    .connect(owner)
    .mint(people.address, "Anon", "Earth Hospital", "Earth", 1652971070);

  // accessing voterEligibity from NewContract.sol
  const vote0 = await newContract.connect(owner).getVoterEligibity(0);
  const vote1 = await newContract.connect(owner).getVoterEligibity(1);
  // console.log("voter eligibity ", vote0); //should return 1
  // console.log("voter eligibity ", vote1); //should return 0
  // await newContract.connect(owner).printHello(0);
  // await newContract.connect(owner).printHello(1);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
