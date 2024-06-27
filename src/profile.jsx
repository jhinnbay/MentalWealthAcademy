import { useAccount, useEnsName } from 'wagmi'
import React from 'react'
import { BlackCreateWalletButton } from './components/web3/BlackCreateBlackButton'
import { SignInWithEthereum } from './components/web3/SignInWithEthereum'
export function Profile() {
  const { address } = useAccount()
  return <div>
<div>
{address}
</div>
  <div>
    <BlackCreateWalletButton />
    <SignInWithEthereum />
  </div>
  </div>
  const { data, error, status } = useEnsName({ address })
  if (status === 'pending') return <div>Loading ENS name</div>
  if (status === 'error')
    return <div>Error fetching ENS name: {error.message}</div>
  return <div>ENS name: {data}</div>
}