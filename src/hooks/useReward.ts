import { useCallback } from 'react'

import useKai from './useKai'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../kai/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const kai = useKai()
  const masterChefContract = getMasterChefContract(kai)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, kai])

  return { onReward: handleReward }
}

export default useReward
