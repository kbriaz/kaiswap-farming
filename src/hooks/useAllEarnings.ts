import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../kai/utils'
import useKai from './useKai'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const kai = useKai()
  const farms = getFarms(kai)
  const masterChefContract = getMasterChefContract(kai)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, kai])

  useEffect(() => {
    if (account && masterChefContract && kai) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, kai])

  return balances
}

export default useAllEarnings
