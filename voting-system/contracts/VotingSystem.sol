// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract VotingSystem {
    struct Poll {
        string name;
        string description;
        string[] options;
    }

    Poll[] public polls;

    function addPoll(Poll memory poll) external payable {
        require(msg.value == 0.001 ether, "Plase, submit a 0.001 ETH fee to vote");
        polls.push(poll);
    }
}
