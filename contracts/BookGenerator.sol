//SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "./Book.sol";

pragma solidity ^0.8.25;

contract BookGenerator {
   uint public currentIndex;
   mapping(uint => Book) public books;


   function deployBook(string memory _uri, uint _cidNumber) external {
        Book newBook = new Book(_uri, _cidNumber);
        books[currentIndex] = newBook;
        currentIndex++;
    }

    function viewBook(uint _index) external view returns(Book) {
       require(_index < currentIndex, "OUT OF BOUNDS");
       return books[_index];
    }
}
