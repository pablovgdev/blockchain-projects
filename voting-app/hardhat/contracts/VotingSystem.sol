// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract VotingSystem {
    struct Poll {
        string name;
        string description;
        string[] options;
    }

    Poll[] public polls;

    function getPolls() external view returns (Poll[] memory) {
        return polls;
    }

    function addPoll(Poll memory poll) external payable {
        require(msg.value == 0.001 ether, "Plase, submit a 0.001 ETH fee to vote");
        require(bytes(poll.name).length > 0, "The poll name cannot be empty");
        polls.push(poll);
    }

    function fallback() external payable {
        console.log("----- fallback:", msg.value);
    }

    function receive() external payable {
        console.log("----- receive:", msg.value);
    }
}
