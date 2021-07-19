import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../kai/utils'
import useKai from './useKai'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const kai = useKai()
  const masterChefContract = getMasterChefContract(kai)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, kai])

  useEffect(() => {
    if (account && kai) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, kai])

  return balance
}

export default useStakedBalance
