import { task } from "hardhat/config"
import { deployMemeCoinContract } from "./memeCoin"
import { deployAirdropContract } from "./airdrop"

task("deploy", "Deploy all contracts").setAction(
  async (taskArgs, hre) => {
    console.log("Deployment...")
    const { memeCoinContract } = await deployMemeCoinContract(hre.ethers)
    const { airdropContract } = await deployAirdropContract(hre.ethers, memeCoinContract.address)

    const tx = await memeCoinContract.transfer(airdropContract.address, hre.ethers.utils.parseEther(`100`))
    await tx.wait()
  }
)