// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/interfaces/IERC721.sol";

contract Voting {
    address birthCertificate = IERC721(contractAddress); /// need to add nft contract here

    struct proposal{
        string title;
        string body;
        uint256  deadline;
        string location;
        uint256 Yay;
        uint256 Nay;
        uint256 Abstain;
        bool created;
    }

    mapping (string => proposal) public proposals;

    //@dev create  a new voting proposal
    function createProposal(string memory _title, string memory _body,string _location, uint256 _deadline ) public{
      //require msg.sender is approved address
      require(!proposals[_title].created, "This proposal already exists"); // make sure a proposal with this title DOES NOT exist
      proposals[_title] = proposal(_title,_body, _deadline,0,0,0, true); // create a propsal with vote counts set to zero
    }

    // this will need to be altered to get the mapping of the voter to access status, location, age rather than what currently written
    function vote(string memory _title, string memory _vote) public{
      require(birthCertificate.balanceOf > 0, "You must have a valid birth certificate");
      require(birthCertificate.checkStatus > 0, "Must be elgible to vote"); // Need a function in nft to return either a boolean or 1/0 for voter status 
      require(keccak256(abi.encodePacked(birthCertificate.checkLocation)) == keccak256(abi.encodePacked(proposals[_title].location))); //will need to be changed to work with the contract
      require(proposals[_title].created, "This proposal does not exist"); // make sure a proposal with this title DOES exist
      require(
          keccak256(abi.encodePacked(_vote)) == keccak256(abi.encodePacked("Yay")) ||
          keccak256(abi.encodePacked(_vote)) == keccak256(abi.encodePacked("Nay")) ||
          keccak256(abi.encodePacked(_vote)) == keccak256(abi.encodePacked("Absatin")),
          "Please vote with Yay, Nay, or Abstain"
      );
      //require voting is still open


      if(keccak256(abi.encodePacked(_vote)) == keccak256(abi.encodePacked("Yay"))){
        proposals[_title].Yay ++;
      }else if(keccak256(abi.encodePacked(_vote)) == keccak256(abi.encodePacked("Nay"))){
        proposals[_title].Nay ++;
      }else(keccak256(abi.encodePacked(_vote)) == keccak256(abi.encodePacked("Abstain"))){
        proposals[_title].Abstain ++;
      }
    } 

    function getBirthCertificate(address _sender) public returns(string voteStatus, string location ){
        uint256 tokenId = birthCertificate.addressToTokenId(_sender);
        struct Certificate = birthCertificate.tokenIdtoCertificate(tokenId);
    }
}