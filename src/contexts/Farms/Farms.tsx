import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useKai from '../../hooks/useKai'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../kai/utils'
import { getFarms } from '../../kai/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const kai = useKai()
  const { account } = useWallet()

  const farms = getFarms(kai)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
