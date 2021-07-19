import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Kai } from '../../kai'

export interface KaiContext {
  kai?: typeof Kai
}

export const Context = createContext<KaiContext>({
  kai: undefined,
})

declare global {
  interface Window {
    kaisauce: any
  }
}

const KaiProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [kai, setKai] = useState<any>()

  // @ts-ignore
  window.kai = kai
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const kaiLib = new Kai(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setKai(kaiLib)
      window.kaisauce = kaiLib
    }
  }, [ethereum])

  return <Context.Provider value={{ kai }}>{children}</Context.Provider>
}

export default KaiProvider
