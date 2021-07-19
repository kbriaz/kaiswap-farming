import {useCallback} from 'react'

import useKai from './useKai'
import {useWallet} from 'use-wallet'

import {leave, getXKaiStakingContract} from '../kai/utils'

const useLeave = () => {
  const {account} = useWallet()
  const kai = useKai()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXKaiStakingContract(kai),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, kai],
  )

  return {onLeave: handle}
}

export default useLeave
