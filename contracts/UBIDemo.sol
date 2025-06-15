// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UBIDemo {
    address public owner;
    uint public ubiAmount = 0.01 ether;

    mapping(address => uint) public lastClaimed;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOncePerDay() {
        require(block.timestamp - lastClaimed[msg.sender] > 1 days, "You can claim UBI only once per day");
        _;
    }

    function claimUBI() public onlyOncePerDay {
        require(address(this).balance >= ubiAmount, "Contract out of funds");
        lastClaimed[msg.sender] = block.timestamp;
        payable(msg.sender).transfer(ubiAmount);
    }

    //Allow contract to receive ETH
    receive() external payable {}
}