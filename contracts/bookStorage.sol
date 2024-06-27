// contracts/BookStorage.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BookStorageDAO {
    mapping(address => string) private bookCIDs;
    address[] private users;

    function storeBookCID(string memory cid) public {
        if(bytes(bookCIDs[msg.sender]).length == 0) {
            // Only add the user if they are uploading for the first time
            users.push(msg.sender);
        }
        bookCIDs[msg.sender] = cid;
    }

    function getBookCID(address user) public view returns (string memory) {
        return bookCIDs[user];
    }

    function getAllBooks() public view returns (address[] memory, string[] memory) {
        string[] memory cids = new string[](users.length);
        for(uint i = 0; i < users.length; i++) {
            cids[i] = bookCIDs[users[i]];
        }
        return (users, cids);
    }
}
