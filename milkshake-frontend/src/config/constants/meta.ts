import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MilkshakeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MilkshakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://MilkshakeSwap.finance/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | MilkshakeSwap',
  },
  '/competition': {
    title: 'Trading Battle | MilkshakeSwap',
  },
  '/prediction': {
    title: 'Prediction | MilkshakeSwap',
  },
  '/farms': {
    title: 'Farms | MilkshakeSwap',
  },
  '/pools': {
    title: 'Pools | MilkshakeSwap',
  },
  '/lottery': {
    title: 'Lottery | MilkshakeSwap',
  },
  '/collectibles': {
    title: 'Collectibles | MilkshakeSwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | MilkshakeSwap',
  },
  '/teams': {
    title: 'Leaderboard | MilkshakeSwap',
  },
  '/profile/tasks': {
    title: 'Task Center | MilkshakeSwap',
  },
  '/profile': {
    title: 'Your Profile | MilkshakeSwap',
  },
}
