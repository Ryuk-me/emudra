// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Ration {
    address payable public owner;

    uint256 constant MIN_FOOD_ETHER_REQ = 2 ether;
    uint256 constant MIN_FUEL_ETHER_REQ = 1 ether;
    uint256 constant MIN_MEDICINE_ETHER_REQ = 2 ether;

    event TransactionCompleted(
        address _user,
        uint256 _value,
        uint256 _updated_at
    );

    constructor() {
        owner = payable(msg.sender);
    }

    struct User {
        address address_user;
        bool isFuelBought;
        bool isFoodBought;
        bool isMedicineBought;
        uint256 created_at;
        uint256 last_update;
    }

    User[] public all_users;

    mapping(address => User) user_map;

    function buyFood() external payable {
        require(msg.value == MIN_FOOD_ETHER_REQ, "Invalid Transaction (food)");
        bool _isFuelBought = false;
        bool _isFoodBought = false;
        bool _isMedicineBought = false;
        for (uint256 i = 0; i < all_users.length; i++) {
            if (all_users[i].address_user == msg.sender) {
                _isFoodBought = all_users[i].isFoodBought;
                _isFuelBought = all_users[i].isFuelBought;
                _isMedicineBought = all_users[i].isMedicineBought;

                require(!_isFoodBought, "You have already availed food ration");
                (bool sent, bytes memory data) = owner.call{value: msg.value}(
                    ""
                );
                require(sent, "Failed to send Ether");
                _isFoodBought = true;
                all_users[i].isFoodBought = _isFoodBought;
                all_users[i].last_update = block.timestamp;
                emit TransactionCompleted(
                    msg.sender,
                    msg.value,
                    all_users[i].last_update
                );
                return;
            }
        }
        (bool sent, bytes memory data) = owner.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        _isFoodBought = true;
        all_users.push(
            user_map[msg.sender] = User(
                msg.sender,
                _isFuelBought,
                _isFoodBought,
                _isMedicineBought,
                block.timestamp,
                block.timestamp
            )
        );
    }

    function buyFuel() external payable {
        require(msg.value == MIN_FUEL_ETHER_REQ, "Invalid Transaction (fuel)");
        bool _isFuelBought = false;
        bool _isFoodBought = false;
        bool _isMedicineBought = false;
        for (uint256 i = 0; i < all_users.length; i++) {
            if (all_users[i].address_user == msg.sender) {
                _isFoodBought = all_users[i].isFoodBought;
                _isFuelBought = all_users[i].isFuelBought;
                _isMedicineBought = all_users[i].isMedicineBought;

                require(!_isFuelBought, "You have already availed fuel ration");
                (bool sent, bytes memory data) = owner.call{value: msg.value}(
                    ""
                );
                require(sent, "Failed to send Ether");
                _isFuelBought = true;
                all_users[i].isFuelBought = _isFuelBought;
                all_users[i].last_update = block.timestamp;
                emit TransactionCompleted(
                    msg.sender,
                    msg.value,
                    all_users[i].last_update
                );
                return;
            }
        }
        (bool sent, bytes memory data) = owner.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        _isFuelBought = true;
        all_users.push(
            user_map[msg.sender] = User(
                msg.sender,
                _isFuelBought,
                _isFoodBought,
                _isMedicineBought,
                block.timestamp,
                block.timestamp
            )
        );
    }

    function buyMedicine() external payable {
        require(
            msg.value == MIN_MEDICINE_ETHER_REQ,
            "Invalid Transaction (medicine)"
        );
        bool _isFuelBought = false;
        bool _isFoodBought = false;
        bool _isMedicineBought = false;
        for (uint256 i = 0; i < all_users.length; i++) {
            if (all_users[i].address_user == msg.sender) {
                _isFoodBought = all_users[i].isFoodBought;
                _isFuelBought = all_users[i].isFuelBought;
                _isMedicineBought = all_users[i].isMedicineBought;

                require(
                    !_isMedicineBought,
                    "You have already availed medicine ration"
                );
                (bool sent, bytes memory data) = owner.call{value: msg.value}(
                    ""
                );
                require(sent, "Failed to send Ether");
                _isMedicineBought = true;
                all_users[i].isMedicineBought = _isMedicineBought;
                all_users[i].last_update = block.timestamp;
                emit TransactionCompleted(
                    msg.sender,
                    msg.value,
                    all_users[i].last_update
                );
                return;
            }
        }

        (bool sent, bytes memory data) = owner.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        _isMedicineBought = true;
        all_users.push(
            user_map[msg.sender] = User(
                msg.sender,
                _isFuelBought,
                _isFoodBought,
                _isMedicineBought,
                block.timestamp,
                block.timestamp
            )
        );
    }

    function getUsers() public view returns (User[] memory) {
        return all_users;
    }

    function currentUserData() public view returns (User memory) {
        for (uint256 i = 0; i < all_users.length; i++) {
            if (all_users[i].address_user == msg.sender) {
                User memory temp = all_users[i];
                return temp;
            }
        }
    }

    function getBalance() external view returns (uint256) {
        return address(msg.sender).balance;
    }

    function getBalanceOwner() external view returns (uint256) {
        return address(owner).balance;
    }
}
