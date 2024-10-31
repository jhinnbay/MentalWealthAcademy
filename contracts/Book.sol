//SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.25;

contract Book is ERC1155Supply, Ownable {
  
   uint immutable public bookCreationTime;
   address public firstRenter;
   address public secondRenter;
   uint public firstRentalDeadline;
   uint public secondRentalDeadline;
   uint cidNumber;
   error RENTAL_IN_SESSION();
   error RENTAL_EXPIRED();
   error CANT_VIEW_BOOK();
   
   constructor(string memory _uri, uint _cidNumber) ERC1155(_uri) Ownable(msg.sender) {
      bookCreationTime = block.timestamp;
      cidNumber = _cidNumber;
   }
    
   function rentBook() external {
     if(totalSupply(1) < 2) {
      _mint(msg.sender, 1, 1, "");
      if(firstRentalDeadline < 1) {
        firstRentalDeadline = block.timestamp + 24 hours;
        firstRenter = msg.sender;
      } else {
        secondRentalDeadline = block.timestamp + 24 hours;
        secondRenter = msg.sender;
      }
     } else {
        if(block.timestamp <= firstRentalDeadline && block.timestamp <= secondRentalDeadline) {
            revert RENTAL_IN_SESSION();
        }
        if(block.timestamp >= firstRentalDeadline) {
          _burn(firstRenter, 1, 1);
          _mint(msg.sender, 1, 1, "");
          firstRentalDeadline = block.timestamp + 24 hours;
          firstRenter = msg.sender;
        } else if(block.timestamp >= secondRentalDeadline) {
          _burn(secondRenter, 1, 1);
          _mint(msg.sender, 1, 1, "");
          secondRentalDeadline = block.timestamp + 24 hours;
          secondRenter = msg.sender;
        }

     }
   }

   function setCidNumber(uint _cidNumber) external onlyOwner {
      cidNumber = _cidNumber;
   }

   function setURI(string calldata _uri) external onlyOwner {
     _setURI(_uri);
   }

   function fetchCidNumber() external onlyOwner view returns(uint) {
     return cidNumber;
   }
}