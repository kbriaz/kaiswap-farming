import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}



export const contractAddresses = {
  kai: {
    97: '0xFa7D529f93f862D48702E7D53fA2dE8672798056',
  },
  masterChef: {
    97: '0x3F85BD941027dA99e1aa3536FFFF4acD50E4D23C',
  },
  weth: {
    97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
  xKai: {
    97: '0x08395e86A610b458626dA5B874E9fD728CfB424c'
  }
}



export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      97: '0xFa7D529f93f862D48702E7D53fA2dE8672798056',
    },
    tokenAddresses: {
      97: '0xFa7D529f93f862D48702E7D53fA2dE8672798056',
    },
    name: 'Kai Style!',
    symbol: 'KAI-KAI',
    tokenSymbol: 'KAI',
    icon: '⚖️',
  },
 
]
