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

  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy();
  await voting.deployed;
  console.log("voting contract deployed to ", voting.address);

  // set birthCertificate address on voting contract
  await voting
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

  await birthCertificate
    .connect(people2)
    .mint(people2.address, "Anon", "Earth Hospital", "Earth", 12839289);
  console.log("voting...");
  await voting
    .connect(owner)
    .createProposal("a title", "sample body", "Earth", 2347428689);

  await voting
    .connect(owner)
    .createProposal("a title", "sample body", "Earth", 1);

  await voting.connect(owner).vote(1, "Yay");
  // await voting.connect(people).vote(1, "Yay"); // this one should throw error
  // await voting.connect(owner).vote(1, "Yay"); // this one should throw error
  // const epoch = Math.floor(new Date().getTime() / 1000.0);
  // console.log(epoch);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
