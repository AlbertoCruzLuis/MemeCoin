// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Airdrop {
  using SafeERC20 for IERC20;
  using Counters for Counters.Counter;
  Counters.Counter private _holderAmount;

  address public memeCoinAddress;
  mapping(address => bool) public holders;

  event AirdropEvent(address indexed sender, uint256 holderId, uint256 amount);

  constructor(address _memeCoinAddress) {
    memeCoinAddress = _memeCoinAddress;
  }

  modifier onlyOneAirdrop() {
    if (holders[msg.sender]) {
      require(false, "You can only airdrop once.");
    }
    _;
  }

  modifier onlyOneHundredHolder() {
    if (_holderAmount.current() >= 100) {
      require(false, "You can only airdrop 100 holders.");
    }
    _;
  }

  function claimAirdrop() public onlyOneAirdrop onlyOneHundredHolder {
    _holderAmount.increment();
    uint256 amount = 1 ether;
    holders[msg.sender] = true;

    IERC20(memeCoinAddress).safeTransfer(msg.sender, amount);
    emit AirdropEvent(msg.sender, _holderAmount.current(), amount);
  }
}