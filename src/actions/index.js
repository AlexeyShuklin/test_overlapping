export const RESTART = 'RESTART'

import { range } from 'd3'

export function restart() {
  return {     type: RESTART,
    points: range(50).map(() => range(3).map(Math.random))  }
}
