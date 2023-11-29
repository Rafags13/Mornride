import { createContext } from 'react'
import { BearStore } from '../hooks/useFilters'

export const BearContext = createContext<BearStore | null>(null)