import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

const Filter = () => {
  const { state } = useAppContext()
  const [query, setQuery] = useState('')

  const isValid = (o) => Array.isArray(o.items) && o.items.length > 0 && o.items.every(i => i.quantity > 0) && o.totalAmount > 0

  const valid = state.orders.filter(isValid)
  const filtered = valid.filter(o => o.restaurant.toLowerCase().includes(query.toLowerCase()))

  if (state.loading) return <p>Loading...</p>
  if (state.error) return <p>Error: {state.error}</p>

  return (
    <div>
      <h2>Filter by Restaurant</h2>
      <input data-testid="filter-input" type="text" placeholder="Enter restaurant..." value={query} onChange={(e) => setQuery(e.target.value)} />
      {query === '' && <p>Please enter restaurant name</p>}
      {query !== '' && filtered.length === 0 && <p>No results found</p>}
      {filtered.map(o => (
        <div key={o.orderId} data-testid="order-item">
          <p>Order #{o.orderId} - {o.restaurant} - ${o.totalAmount}</p>
          <Link to={`/orders/${o.orderId}`}><button>View</button></Link>
        </div>
      ))}
    </div>
  )
}

export default Filter