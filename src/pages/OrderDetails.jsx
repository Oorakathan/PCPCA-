import { useParams, Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const OrderDetails = () => {
  const { id } = useParams()
  const { state } = useAppContext()
  const order = state.orders.find(o => o.orderId === parseInt(id))

  if (state.loading) return <p>Loading...</p>
  if (state.error) return <p>Error: {state.error}</p>
  if (!order) return <div><h1>Order not found</h1><Link to="/orders"><button>Back</button></Link></div>

  return (
    <div>
      <h1>Order #{order.orderId}</h1>
      <Link to="/orders"><button>Back</button></Link>
      <p>Customer: {order.customerName || 'Unknown'}</p>
      <p>Restaurant: {order.restaurant}</p>
      <p>Status: {order.status}</p>
      {order.deliveryTime && <p>Delivery: {order.deliveryTime} min</p>}
      {order.rating && <p>Rating: {order.rating}</p>}
      <h3>Items</h3>
      {order.items?.length > 0 ? (
        <ul>
          {order.items.map((item, i) => <li key={i}>{item.name} x{item.quantity} = ${item.price * item.quantity}</li>)}
        </ul>
      ) : <p>No items</p>}
      <h3>Total: ${order.totalAmount}</h3>
    </div>
  )
}

export default OrderDetails
