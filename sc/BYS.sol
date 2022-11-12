// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";

contract BYS is Ownable {
    mapping(address => bool) private _issuers;
    mapping(bytes32 => address) private _isRegisteredDocHash;
    mapping(string => bytes32) private _isRegisteredDoc;
    
    modifier onlyIssuer() {
        require(_issuers[msg.sender] == true, "Not a valid sender");
        _;
    }

    modifier onlyNonRegisteredDoc(bytes32 docHash, string memory documentId) {
        require(_isRegisteredDocHash[docHash] == address(0));
        require(_isRegisteredDoc[documentId] == bytes32(0));
        _;
    }

    function register(address _issuer) public onlyOwner {
        _issuers[_issuer] = true;
    }

    function revoke(address _issuer) public onlyOwner {
        _issuers[_issuer] = false;
    }

    function isIssued(address caller) public view returns (bool) {
        return _issuers[caller];
    }

    function registerDocument(bytes32 docHash, string memory documentId) public onlyIssuer onlyNonRegisteredDoc(docHash, documentId) {
      _isRegisteredDocHash[docHash] = msg.sender;
      _isRegisteredDoc[documentId] = docHash;
    }

    function isRegisteredDocument(bytes32 docHash, string memory documentId) public view returns (address){
        require( docHash != bytes32(0));
        require(_isRegisteredDoc[documentId] == docHash, "Incorrect or non registered doc id");
        return _isRegisteredDocHash[docHash];
    }
}