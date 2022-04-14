export const RINKEBY_CHAIN_ID = 4
export const LOCALHOST_CHAIN_ID = 1337
export const MEME_COIN_ADDRESS = process.env.NEXT_PUBLIC_MEME_COIN_ADDRESS
export const AIRDROP_ADDRESS = process.env.NEXT_PUBLIC_AIRDROP_ADDRESS

export const CHAIN_ID = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID as string) || RINKEBY_CHAIN_ID
