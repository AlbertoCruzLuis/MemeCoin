import { HardhatEthersHelpers } from "@nomiclabs/hardhat-ethers/types";
import { ethers } from "ethers";

type Ethers = typeof ethers & HardhatEthersHelpers;

export const deployMemeCoinContract = async (ethers: Ethers) => {
  const memeCoinContractFactory = await ethers.getContractFactory("MemeCoin");
  const memeCoinContract = await memeCoinContractFactory.deploy();

  await memeCoinContract.deployed();

  console.log("MemeCoin deployed to:", memeCoinContract.address);

  return {
    memeCoinContract
  }
}