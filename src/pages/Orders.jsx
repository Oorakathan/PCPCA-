import { useAppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

const Orders = () => {
  const { state, dispatch } = useAppContext()

  const isValid = (o) => Array.isArray(o.items) && o.items.length > 0 && o.items.every(i => i.quantity > 0) && o.totalAmount > 0
  const valid = state.orders.filter(isValid)
  const pending = valid.filter(o => o.status !== 'Delivered')
  const delivered = valid.filter(o => o.status === 'Delivered')

  const handleMark = (id) => {
    if (state.orders.find(o => o.orderId === id && o.status === 'Delivered')) return
    dispatch({ type: 'UPDATE_ORDER_STATUS', payload: { orderId: id, status: 'Delivered' } })
  }

  if (state.loading) return <p>Loading...</p>
  if (state.error) return <p>Error: {state.error}</p>

  return (
    <div>
      <h1>Orders</h1>
      <h2>Pending ({pending.length})</h2>
      {pending.length === 0 ? <p>No pending</p> : pending.map(o => (
        <div key={o.orderId} data-testid="order-item">
          <p>#{o.orderId} - {o.restaurant} - ${o.totalAmount}</p>
          <button onClick={() => handleMark(o.orderId)}>Mark Delivered</button>
          <Link to={`/orders/${o.orderId}`}><button>View</button></Link>
        </div>
      ))}
      <h2>Delivered ({delivered.length})</h2>
      {delivered.length === 0 ? <p>No delivered</p> : delivered.map(o => (
        <div key={o.orderId} data-testid="order-item">
          <p>#{o.orderId} - {o.restaurant} - ${o.totalAmount}</p>
          <Link to={`/orders/${o.orderId}`}><button>View</button></Link>
        </div>
      ))}
    </div>
  )
}

export default Orders
