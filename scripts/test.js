const hre = require("hardhat");

// Return the ether balance of a given address.
async function getBalance(address) {
  const balanceBigInt = await hre.waffle.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

// Logs the ether balances for a list of addresses
async function printBalances(addresses) {
  let idx = 0;
  for (const address of addresses) {
    console.log(`Address ${idx} balance: `, await getBalance(address));
    idx++;
  }
}

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

  // mint

  // mint people age over 18
  await birthCertificate
    .connect(owner)
    .mint(owner.address, "Anon", "Earth Hospital", "Earth", 12839289);

  // check if Birth Certificate generate on chain is success
  const tokenURI = await birthCertificate.connect(owner).generateCertificate(0);
  console.log(tokenURI);

  // mint people age below 18
  await birthCertificate
    .connect(owner)
    .mint(people.address, "Anon", "Earth Hospital", "Earth", 1652971070);

  // check if Birth Certificate generate on chain is success
  const tokenURI1 = await birthCertificate
    .connect(owner)
    .generateCertificate(1);
  console.log(tokenURI1);

  // try to generate non exist tokenId (33)
  // const tokenURI2 = await birthCertificate
  //   .connect(owner)
  //   .generateCertificate(33);
  // console.log(tokenURI2);

  // const updateEligibity = await birthCertificate
  //   .connect(owner)
  //   .updateEligibity(0); // this one already 18

  // const tokenURINew = await birthCertificate
  //   .connect(owner)
  //   .generateCertificate(0);
  // console.log(tokenURINew);

  // const updateEligibity2 = await birthCertificate
  //   .connect(people2)
  //   .updateEligibity(1); //should throw error because people2 not own tokenId 1
  // console.log(updateEligibity2);

  // check if non owner try to mint:
  await birthCertificate
    .connect(people2)
    .mint(people2.address, "Name", "Hospital", "Eart", 28948291);
  const tokenURI2 = await birthCertificate
    .connect(owner)
    .generateCertificate(2);
  console.log(tokenURI2);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
