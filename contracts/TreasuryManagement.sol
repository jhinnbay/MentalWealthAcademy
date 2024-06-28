// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TreasuryManagement {
    address public admin;
    uint256 public funds;

    event FundsDeposited(uint256 amount);
    event FundsWithdrawn(uint256 amount);

    constructor() {
        admin = msg.sender;
    }

    function depositFunds() public payable onlyAdmin {
        funds += msg.value;
        emit FundsDeposited(msg.value);
    }

    function withdrawFunds(uint _amount) public onlyAdmin {
        require(_amount <= funds, "Not enough funds");
        payable(admin).transfer(_amount);
        funds -= _amount;
        emit FundsWithdrawn(_amount);
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }
}
