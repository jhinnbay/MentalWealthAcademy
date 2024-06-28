import { http, createConfig } from 'wagmi'
import { baseSepolia, mainnet, sepolia } from 'wagmi/chains'

export const config = createConfig({
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(),
  },
})