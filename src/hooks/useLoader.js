import { useContext } from 'react'
import { Loading } from '../context/loading'

export const useLoader = () => {
    const context = useContext(Loading)
    if (context === undefined) throw new Error('useLoading in provider')
    return context
}
