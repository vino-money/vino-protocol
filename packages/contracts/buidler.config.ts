import { usePlugin, BuidlerConfig } from '@nomiclabs/buidler/config'

usePlugin('@nomiclabs/buidler-ethers')
usePlugin('@nomiclabs/buidler-waffle')

export default {
  solc: {
    version: '0.7.1',
  },
} as BuidlerConfig
