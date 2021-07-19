import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../kai/utils'
import useKai from './useKai'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const kai = useKai()
  const masterChefContract = getMasterChefContract(kai)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, kai])

  useEffect(() => {
    if (account && masterChefContract && kai) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, kai])

  return balance
}

export default useEarnings
