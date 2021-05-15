import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Kitchen',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'ShakeIt',
    icon: 'PoolIcon',
    href: '/pools',
  },
 
  {
    label: 'Lottery - Soon',
    icon: 'TicketIcon',
    href: '/',
  },
  {
    label: 'Audit',
    icon: 'InfoIcon',
    items: [
      {
        label: 'CommingSoon',
        //href: 'https://pancakeswap.info',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/milkshakefarm',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
    ],
  },
]

export default config
