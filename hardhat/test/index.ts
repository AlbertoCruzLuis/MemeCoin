import { ethers } from "hardhat";

describe("MemeCoin", function () {
  it("Should deploy correctly", async function () {
    const MemeCoinFactory = await ethers.getContractFactory("MemeCoin");
    const memeCoin = await MemeCoinFactory.deploy();

    await memeCoin.deployed();

    console.log("Greeter deployed to:", memeCoin.address);
  });
});
