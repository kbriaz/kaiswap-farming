import { useCallback } from 'react'

import useKai from './useKai'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../kai/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const kai = useKai()
  const masterChefContract = getMasterChefContract(kai)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, kai],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
