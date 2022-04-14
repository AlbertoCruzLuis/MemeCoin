import { TokenomicsSection } from "content/TokenomicsSection"
import { useAirdrop } from "hooks/useAirdrop"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { BsArrowUpRight } from "react-icons/bs"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Home: NextPage = () => {
  const { claimAirdropMutation, isClaimed } = useAirdrop()

  const handleClaimAirdrop = async () => {
    claimAirdropMutation.mutate()
  }

  return (
    <>
      <Head>
        <title>MemeCoin</title>
      </Head>
      <div className="flex flex-col gap-16">
        <div className="relative grid h-full grid-cols-2 gap-10 p-4 pt-40 pb-32 my-auto overflow-hidden xl:px-8 xs:grid-cols-1">
          <div className="z-10 flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 px-4 border-2 border-orange-500 rounded-full text-neutral-200 max-w-max">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-semibold">Live on Rinkeby</span>
              </div>
              <h1 className="flex flex-col gap-6 font-semibold text-7xl sm:text-6xl xs:text-6xl">
                <span className="text-white">Little meme.</span>
                <span className="text-white">Big dream.</span>
              </h1>
              <p className="text-gray-300">Explore the crypto world. Join Community of Fox</p>
            </div>
            <button className="flex items-center gap-2 p-4 px-6 transition-all bg-orange-500 max-w-max hover:scale-105" onClick={handleClaimAirdrop}>
              <span className="font-semibold">Get Airdrop</span>
              { claimAirdropMutation.isLoading && <AiOutlineLoading3Quarters className="animate-spin" size="1.2rem" /> }
              { !claimAirdropMutation.isLoading && <BsArrowUpRight /> }
            </button>
          </div>
          <div className="relative flex flex-col items-center justify-center gap-2">
            { isClaimed &&
              <>
                <div className="absolute z-20 -top-[15%] left-[20%]">
                  <Image src="/images/BubbleTalk.svg" width={200} height={200} />
                </div>
              </>
            }
            <Image className="z-10" src="/images/FoxLogo.svg" width={300} height={300} />
            <div className="absolute top-0 bottom-0 left-0 right-0 w-[50rem] h-[50rem] mx-auto my-auto rounded-full bg-gradient-radial from-orange-600/10 via-transparent" />
            <div className="absolute top-0 bottom-0 left-0 right-0 w-[30rem] h-[30rem] mx-auto my-auto rounded-full bg-gradient-radial from-orange-600/40 via-transparent" />
            <div className="absolute top-0 bottom-0 left-0 right-0 w-[20rem] h-[20rem] mx-auto my-auto rounded-full bg-gradient-radial from-orange-600/70 via-transparent" />
          </div>
        </div>
        <TokenomicsSection />
      </div>
    </>
  )
}

export default Home
