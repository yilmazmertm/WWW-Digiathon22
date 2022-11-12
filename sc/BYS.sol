// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";

contract BYS is Ownable {
    mapping(address => bool) private _issuers;
    mapping(bytes32 => address) private _isRegisteredDocHash;
    mapping(string => bytes32) private _isRegisteredDoc;

    address[] public tempAddressLs;

    modifier onlyIssuer() {
        require(_issuers[msg.sender] == true, "Not a valid sender");
        _;
    }

    function register(address _issuer) public onlyOwner {
        _issuers[_issuer] = true;
    }

    function isIssued(address caller) public view returns (bool) {
        return _issuers[caller];
    }

    function registerDoc(bytes32 docHash, string memory documentId) public{
      _isRegisteredDocHash[docHash] = msg.sender;
      _isRegisteredDoc[documentId] = docHash;
    }

    function isRegisteredDoc(bytes32 docHash) public view returns (address){
        return _isRegisteredDocHash[docHash];
    }

    

}