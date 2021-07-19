import {useCallback} from 'react'

import useKai from './useKai'
import {useWallet} from 'use-wallet'

import {enter, getXKaiStakingContract} from '../kai/utils'

const useEnter = () => {
  const {account} = useWallet()
  const kai = useKai()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXKaiStakingContract(kai),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, kai],
  )

  return {onEnter: handle}
}

export default useEnter
