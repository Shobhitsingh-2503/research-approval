// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

error undefinedIndex();
error alreadyVoted();
error YouCannotRemoveThisPaper();
contract Research{
    struct Paper{
        address owner;
        string topic;
        string auth;
        string cid;
        uint256 approval;
    }

    Paper[] private researchPapers;
    mapping(string => address[]) private approvedBy;

    event alreadyApproved(address adrs);

    function submitPaper(string memory topic,string memory auth,string memory cid) external {
        researchPapers.push(Paper(msg.sender,topic,auth,cid,0));
    }

    function vote(uint256 index) external {
        if(index >= researchPapers.length) revert undefinedIndex();
        for(uint i=0;i<approvedBy[researchPapers[index].topic].length;i++){
            if(msg.sender == approvedBy[researchPapers[index].topic][i]){
                revert alreadyVoted();
            }
        }
        researchPapers[index].approval ++;
        approvedBy[researchPapers[index].topic].push(msg.sender);
    }

    function deletePaper(uint index) external {
        if(msg.sender != researchPapers[index].owner) revert YouCannotRemoveThisPaper();
        for(uint i=index;i<researchPapers.length-1;i++){
            Paper memory temp = researchPapers[i];
            researchPapers[i] = researchPapers[i+1];
            researchPapers[i+1] = temp;
        }
        researchPapers.pop();
    }

    function getPapers() external view returns(Paper[] memory){
        return researchPapers;
    }
}