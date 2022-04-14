import { HardhatEthersHelpers } from "@nomiclabs/hardhat-ethers/types";
import { ethers } from "ethers";

type Ethers = typeof ethers & HardhatEthersHelpers;

export const deployAirdropContract = async (ethers: Ethers, memeCoinAddress: string) => {
  const airdropContractFactory = await ethers.getContractFactory("Airdrop");
  const airdropContract = await airdropContractFactory.deploy(memeCoinAddress);

  await airdropContract.deployed();

  console.log("Airdrop deployed to:", airdropContract.address);

  return {
    airdropContract
  }
}