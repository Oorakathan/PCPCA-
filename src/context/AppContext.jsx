import { createContext, useReducer, useContext, useEffect } from 'react'
import appReducer from '../reducer/AppReducer'
import { fetchOrders } from '../services/api'

export const AppContext = createContext()

export const useAppContext = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useAppContext must be used within AppProvider')
  return ctx
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, { orders: [], loading: true, error: null })

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchOrders()
        dispatch({ type: 'SET_ORDERS', payload: data })
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: err.message })
      }
    }
    load()
  }, [])

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}
