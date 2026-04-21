import { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'

const Stats = () => {
  const { state } = useAppContext()

  const isValid = (o) => Array.isArray(o.items) && o.items.length > 0 && o.items.every(i => i.quantity > 0) && o.totalAmount > 0
  const valid = state.orders.filter(isValid)

  const total = valid.reduce((n) => n + 1, 0)
  const delivered = valid.reduce((n, o) => o.status === 'Delivered' ? n + 1 : n, 0)
  const cancelled = valid.reduce((n, o) => o.status === 'Cancelled' ? n + 1 : n, 0)

  useEffect(() => {
    window.appState = { totalOrders: total, deliveredOrders: delivered, cancelledOrders: cancelled }
  }, [total, delivered, cancelled])

  if (state.loading) return <p>Loading...</p>
  if (state.error) return <p>Error: {state.error}</p>

  return (
    <div>
      <h2>Stats</h2>
      <div><h3>Total: <span data-testid="total-orders">{total}</span></h3></div>
      <div><h3>Delivered: <span data-testid="delivered-orders">{delivered}</span></h3></div>
      <div><h3>Cancelled: <span data-testid="cancelled-orders">{cancelled}</span></h3></div>
      
      <h3>By Restaurant</h3>
      <ul>
        {Object.entries(valid.reduce((acc, o) => {
          const r = o.restaurant || 'Unknown'
          acc[r] = (acc[r] || 0) + o.totalAmount
          return acc
        }, {})).map(([name, revenue]) => <li key={name}>{name}: ${revenue}</li>)}
      </ul>
    </div>
  )
}

export default Stats