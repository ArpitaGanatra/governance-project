//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";

// testing purpose, how to access struct data from another contract given the tokenId 

interface IBirthCertificate {
  function getCertificatebyTokenId(uint _tokenId) external view returns (
    string memory name,
    string memory locationofBirth,
    string memory location,
    uint256 dateofBirth,
    uint256 voterEligibity
  );

}

contract SimpleContract {
  address birthCertificateContract;
  function setBirthCertificateAddress(address _address) public { // changed to public for testing purpose
    birthCertificateContract = _address;
    console.log("birth certificate address set");
  }

  function getVoterEligibity(uint256 _tokenId) public view returns(uint256) { // changed to public for testing purpose
    uint256 voterEligibity;
    (,,,,voterEligibity) = IBirthCertificate(birthCertificateContract).getCertificatebyTokenId(_tokenId);
    // if (voterEligibity == 1) {
    //   console.log("value 1 : ", voterEligibity);
    // } else console.log("value 0 : ", voterEligibity);
    return voterEligibity;
  }

}