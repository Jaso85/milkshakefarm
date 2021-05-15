import { MenuEntry } from '@MilkshakeSwap-libs/uikit'

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
        href: 'https://exchange.MilkshakeSwap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.MilkshakeSwap.finance/#/pool',
      },
      {
        label: 'LP Migration',
        href: 'https://v1exchange.MilkshakeSwap.finance/#/migrate',
      },
      {
        label: 'V1 Liquidity (Old)',
        href: 'https://v1exchange.MilkshakeSwap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Prediction',
    icon: 'PredictionsIcon',
    href: '/prediction',
    status: {
      text: 'BETA',
      color: 'warning',
    },
  },
  {
    label: 'Lottery - Comming Soon',
    icon: 'TicketIcon',
    href: '/',
  },
  {
    label: 'Collectibles - Comming Soon',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://MilkshakeSwap.info',
      },
      {
        label: 'Tokens',
        href: 'https://MilkshakeSwap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://MilkshakeSwap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://MilkshakeSwap.info/accounts',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.MilkshakeSwap.finance/contact-us',
      },
      {
        label: 'Github',
        href: 'https://github.com/milkshakefarm',
      },
      {
        label: 'Docs',
        href: 'https://docs.MilkshakeSwap.finance',
      },
      {
        label: 'Blog',
        href: 'https://MilkshakeSwap.medium.com',
      },
    ],
  },
]

export default config
