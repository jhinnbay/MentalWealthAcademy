// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Wealth is ERC20 {
    constructor() ERC20("Wealth", "WEALTH") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}
