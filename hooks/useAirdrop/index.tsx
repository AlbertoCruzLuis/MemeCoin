import { AIRDROP_ADDRESS } from "config"
import { useContract } from "hooks/useContract"
import AirdropContract from "hardhat/artifacts/contracts/Airdrop.sol/Airdrop.json"
import { Contract } from "ethers"
import toast from "react-hot-toast"
import { useMutation } from "react-query"
import { useWeb3 } from "@3rdweb/hooks"
import { useState } from "react"

export const useAirdrop = () => {
  const { address } = useWeb3()
  const [isClaimed, setIsClaimed] = useState(false)
  const { contract: airdropContract } = useContract<Contract>({
    contractAddress: AIRDROP_ADDRESS,
    contractJson: AirdropContract
  })

  const claimAirdrop = async () => {
    if (!address) {
      toast.error("Please connect to your wallet")
      return
    }

    if (!airdropContract) return

    try {
      const tx = await airdropContract.claimAirdrop()
      await tx.wait()
      setIsClaimed(true)
      setTimeout(() => {
        setIsClaimed(false)
      }, 4000)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const claimAirdropMutation = useMutation(claimAirdrop)

  return {
    claimAirdropMutation,
    isClaimed
  }
}
