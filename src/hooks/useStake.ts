import { useCallback } from 'react'

import useKai from './useKai'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../kai/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const kai = useKai()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(kai),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, kai],
  )

  return { onStake: handleStake }
}

export default useStake
