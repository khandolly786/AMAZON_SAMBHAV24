// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductCertification {
    struct Product {
        uint id;  // Unique product identifier
        string name;  // Product name
        string sourcing;  // Details about sourcing (e.g., "100% renewable")
        uint greenScore;  // Green score value (e.g., 85 out of 100)
        bool certified;  // Certification status (true/false)
    }

    mapping(uint => Product) public products;  // Stores products mapped by ID
    address public owner;  // Contract owner's address

    constructor() {
        owner = msg.sender;  // Sets the deployer as the owner
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    function addProduct(
        uint _id,
        string memory _name,
        string memory _sourcing,
        uint _greenScore
    ) public onlyOwner {
        products[_id] = Product(_id, _name, _sourcing, _greenScore, true);
    }

    function getProduct(uint _id) public view returns (Product memory) {
        return products[_id];
    }
}
