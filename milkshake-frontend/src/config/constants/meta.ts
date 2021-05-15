import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MilkShakeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn SHAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens!',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | MilkShakeSwap',
  },
  '/competition': {
    title: 'Trading Battle | MilkShakeSwap',
  },
  '/prediction': {
    title: 'Prediction | MilkShakeSwap',
  },
  '/farms': {
    title: 'Farms | MilkShakeSwap',
  },
  '/pools': {
    title: 'Pools | MilkShakeSwap',
  },
  '/lottery': {
    title: 'Lottery | MilkShakeSwap',
  },
  '/collectibles': {
    title: 'Collectibles | MilkShakeSwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | MilkShakeSwap',
  },
  '/teams': {
    title: 'Leaderboard | MilkShakeSwap',
  },
  '/profile/tasks': {
    title: 'Task Center | MilkShakeSwap',
  },
  '/profile': {
    title: 'Your Profile | MilkShakeSwap',
  },
}
