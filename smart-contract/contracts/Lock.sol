// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
//import "node_modules/hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Lock is UUPSUpgradeable, OwnableUpgradeable {
    uint public unlockTime;

    event Withdrawal(uint amount, uint when);

//    constructor(uint _unlockTime) payable {
//        require(
//            block.timestamp < _unlockTime,
//            "Unlock time should be in the future"
//        );
//
//        unlockTime = _unlockTime;
//        owner = payable(msg.sender);
//    }

    // Replace constructor with initialize function
    function initialize(uint256 _unlockTime) public initializer {
        __Ownable_init(msg.sender);  // Initialize OwnableUpgradeable
        __UUPSUpgradeable_init();
        unlockTime = _unlockTime;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    function withdraw() public onlyOwner {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
//        console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet, Too early to unlock.");
//        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

//        owner.transfer(address(this).balance);
        payable(owner()).transfer(address(this).balance);  // 使用 owner() 获取 owner 地址并转账
    }
}
