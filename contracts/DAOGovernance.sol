// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DAOGovernance {
    IERC20 public platformToken;
    address public admin;

    struct Proposal {
        uint id;
        string description;
        uint yesVotes;
        uint noVotes;
        bool executed;
        uint256 timestamp;
        address proposer;
    }

    Proposal[] public proposals;
    mapping(uint => mapping(address => bool)) public voted;
    uint256 public executionTimeframe;

    event ProposalCreated(uint proposalId, string description, address proposer);
    event Voted(uint proposalId, address voter, bool vote);
    event ProposalExecuted(uint proposalId, bool approved);

    constructor(
        uint256 _executionTimeframe,
        address _platformToken
    ) {
        executionTimeframe = _executionTimeframe;
        platformToken = IERC20(_platformToken);
        admin = msg.sender;
    }

    function createProposal(string memory _description) public {
        proposals.push(Proposal(proposals.length, _description, 0, 0, false, block.timestamp, msg.sender));
        emit ProposalCreated(proposals.length - 1, _description, msg.sender);
    }

    function voteOnProposal(uint _proposalId, bool _vote) public {
        require(_proposalId < proposals.length, "Proposal does not exist");
        require(!voted[_proposalId][msg.sender], "You have already voted on this proposal");

        uint256 voterPower = platformToken.balanceOf(msg.sender);
        require(voterPower > 0, "No voting power");

        if (_vote) {
            proposals[_proposalId].yesVotes += voterPower;
        } else {
            proposals[_proposalId].noVotes += voterPower;
        }

        voted[_proposalId][msg.sender] = true;
        emit Voted(_proposalId, msg.sender, _vote);
    }

    function executeProposal(uint _proposalId) public {
        require(_proposalId < proposals.length, "Proposal does not exist");
        require(!proposals[_proposalId].executed, "Proposal already executed");
        require(block.timestamp - proposals[_proposalId].timestamp >= executionTimeframe, "Execution timeframe not reached");

        proposals[_proposalId].executed = true;
        bool approved = proposals[_proposalId].yesVotes > proposals[_proposalId].noVotes;

        emit ProposalExecuted(_proposalId, approved);
    }

    function checkUpkeep() public view returns (bool upkeepNeeded) {
        upkeepNeeded = false;
        for (uint i = 0; i < proposals.length; i++) {
            if (!proposals[i].executed && block.timestamp - proposals[i].timestamp >= executionTimeframe) {
                upkeepNeeded = true;
                break;
            }
        }
    }

    function performUpkeep() public {
        for (uint i = 0; i < proposals.length; i++) {
            if (!proposals[i].executed && block.timestamp - proposals[i].timestamp >= executionTimeframe) {
                executeProposal(i);
            }
        }
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }
}
