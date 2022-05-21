//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "library/BokkyPooBahsDateTimeLibrary/contracts/BokkyPooBahsDateTimeLibrary.sol";

contract BirthCertificate is ERC721URIStorage, Ownable {
  using Strings for uint256;
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  function diffYears(uint fromTimestamp, uint toTimestamp) public pure returns (uint _years) {
    _years = BokkyPooBahsDateTimeLibrary.diffYears(fromTimestamp, toTimestamp);
  }
  // function for human readable date
  function _daysToDate(uint _days) public pure returns (uint year, uint month, uint day) {
    return BokkyPooBahsDateTimeLibrary._daysToDate(_days);
  }

  struct Certificate {
    string name;
    string locationofBirth;
    string location;
    uint256 dateofBirth;
    uint256 voterEligibity;
  }

  uint256 MAX_BC_PER_ADDRESS = 1;

  mapping (uint256 => Certificate) public tokenIdtoCertificate;
  mapping (address => uint256) public addresstoTokenId;
  // mapping (address => bool) public whitelistedAddress;

  constructor() ERC721("Birth Certificate NFT", "BCNFT") {}

// whitelisted address modifier
// modifier whitelisted() {
//   require(whitelistedAddress[msg.sender] = true, "Your address cannot mint the NFT");
//   _;
// }

// // add whitelisted address
// function whitelistedStatus(address _address, bool _bool) public onlyOwner {
//   whitelistedAddress[_address] = _bool;
// }

// on chain NFT Certificate
  function generateCertificate(uint256 tokenId) public view returns(string memory) {
    require(_exists(tokenId), "tokenId not exist!");
    bytes memory svg = abi.encodePacked(
      '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
      '<style>.base { fill: white; font-family: serif; font-size: 14px; }</style>',
      '<rect width="100%" height="100%" fill="black" />',
      '<text x="50%" y="30%" class="base" dominant-baseline="middle" text-anchor="middle">',"Name: ",tokenIdtoCertificate[tokenId].name,'</text>',
      '<text x="50%" y="40%" class="base" dominant-baseline="middle" text-anchor="middle">',"Date of Birth: ",getDateofBirth(tokenId),'</text>',
      '<text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle">',"Location: ",tokenIdtoCertificate[tokenId].location,'</text>',
      '<text x="50%" y="60%" class="base" dominant-baseline="middle" text-anchor="middle">',"Hospital Location: ",tokenIdtoCertificate[tokenId].locationofBirth,'</text>',
      '<text x="50%" y="70%" class="base" dominant-baseline="middle" text-anchor="middle">',"Voter Eligibity: ",getVoterEligibity(tokenId),'</text>',
      '</svg>'
    );
     
    return string(
      abi.encodePacked(
        "data:image/svg+xml;base64,",
        Base64.encode(svg)
      )
    );
  }

  // function to make human readable date (WIP)
  function getDateofBirth(uint256 tokenId) public view returns(string memory){
    uint256 _days = (tokenIdtoCertificate[tokenId].dateofBirth / 60 / 60 / 24); //days
    uint256 year;
    uint256 month;
    uint256 day;
    (year, month, day) = _daysToDate(_days);
    return string(abi.encodePacked(year.toString(), "-", month.toString(), "-", day.toString()));
  }

  // converting voter eligibity to string for readibility for onchain nft
  function getVoterEligibity(uint256 tokenId) public view returns(string memory) {
    return tokenIdtoCertificate[tokenId].voterEligibity == 0 ? "Not eligible for voting" : "Eligible for voting";
  }

  // check if person have the eligibity of vote (age >= 18)
  function checkVoteEligibity(uint256 _dateofBirth) view public returns(uint256) {
    uint256 eligibity;
    uint256 _now = block.timestamp;
    uint256 ageRequirement = 18; // years
    uint256 currentAge = diffYears(_dateofBirth, _now);
    currentAge >= ageRequirement ? eligibity = 1 : eligibity = 0;
    return eligibity;
  }
  
  // update eligibity once people turns to 18
  function updateEligibity(uint256 tokenId) public {
    require(addresstoTokenId[msg.sender] == tokenId, "You dont own this Birth Certificate NFT");
    // 2 require below needed to revert function calling when after the transaction and voterEligibity cannot be updated. saving gas.
    require(tokenIdtoCertificate[tokenId].voterEligibity != 1, "You already over 18");
    require(checkVoteEligibity(tokenIdtoCertificate[tokenId].dateofBirth) == 1, "Your age still below 18");
    tokenIdtoCertificate[tokenId].voterEligibity = 1;
    _setTokenURI(tokenId, getTokenURI(tokenId));
  }

  // token URI
  function getTokenURI(uint256 tokenId) public view returns (string memory){
    bytes memory dataURI = abi.encodePacked(
        '{',
            '"name": "Birth Certificate NFT', tokenId.toString(), '",',
            '"description": "Birth Certificate NFT",',
            '"image": "', generateCertificate(tokenId), '"',
        '}'
    );
    return string(
        abi.encodePacked(
            "data:application/json;base64,",
            Base64.encode(dataURI)
        )
    );
  }

  function mint(address _address, string memory _name, string memory _locationofBirth, string memory _location, uint256 _dateofBirth) public onlyOwner { 
    require(balanceOf(_address) < MAX_BC_PER_ADDRESS, "Only one BC per address!");
    _tokenIds.increment(); //tokenId start from 1
    uint256 newTokenId = _tokenIds.current();
    _safeMint(_address, newTokenId);
    uint256 _voterEligibity = checkVoteEligibity(_dateofBirth);
    tokenIdtoCertificate[newTokenId] = Certificate(_name, _locationofBirth, _location, _dateofBirth, _voterEligibity);
    addresstoTokenId[_address] = newTokenId;
    _setTokenURI(newTokenId, getTokenURI(newTokenId));
  }

  // add function to get tokenIdtoCertificate accessible within other contract via interface (example code at NewContract.sol)
  function getCertificatebyTokenId(uint256 _tokenId) public view returns (
    string memory name,
    string memory locationofBirth,
    string memory location,
    uint256 dateofBirth,
    uint256 voterEligibity
  ) {
    name = tokenIdtoCertificate[_tokenId].name;
    locationofBirth = tokenIdtoCertificate[_tokenId].locationofBirth;
    location = tokenIdtoCertificate[_tokenId].location;
    dateofBirth = tokenIdtoCertificate[_tokenId].dateofBirth;
    voterEligibity = tokenIdtoCertificate[_tokenId].voterEligibity;
  }

  // function to get addresstoTokenId accessible within other contract via interface
    function getTokenIdbyAddress(address _address) public view returns (uint256 tokenId) {
    tokenId = addresstoTokenId[_address];
  }

}
