import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function shortenAddress(address, chars = 4) {
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`
}