import {useCallback} from 'react'

import useKai from './useKai'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getKaiContract,
  getXKaiStakingContract
} from '../kai/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const kai = useKai()
  const lpContract = getKaiContract(kai)
  const contract = getXKaiStakingContract(kai)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
