// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";

contract BYS is Ownable {

    mapping(address => bool) private _issuers;
    mapping(bytes32 => address) private _isRegisteredDocHash;
    mapping(string => bytes32) private _isRegisteredDoc;

    event Register(address indexed issuer);
    event Revoke(address indexed issuer);
    event RegisterDocument(address indexed registrar, bytes32 docHash, string documentId);

    modifier onlyIssuer() {
        require(_issuers[msg.sender] == true,"Not a valid issuer");
        _;
    }

    modifier onlyNonRegisteredDoc(bytes32 docHash, string calldata documentId) {
        require(_isRegisteredDocHash[docHash] == address(0));
        require(_isRegisteredDoc[documentId] == bytes32(0));
        _;
    }

    
    function register(address issuer) public onlyOwner {
        _issuers[issuer] = true;
        emit Register(issuer);
    }

    
    function revoke(address issuer) public onlyOwner {
        _issuers[issuer] = false;
        emit Revoke(issuer);
    }

    function registerDocument(bytes32 docHash, string calldata documentId) public 
        onlyIssuer onlyNonRegisteredDoc(docHash, documentId) {
        _isRegisteredDocHash[docHash] = msg.sender;
        _isRegisteredDoc[documentId] = docHash;
    }


    function isRegisteredDocument(bytes32 docHash, string memory documentId) 
        public view returns (address) {
        require(docHash != bytes32(0));
        require(_isRegisteredDoc[documentId] == docHash,"Incorrect or non registered doc ID");
        return _isRegisteredDocHash[docHash];
    }
}