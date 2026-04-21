const OrderCard = ({ order }) => (
  <div>
    <p><strong>Order #{order.orderId}</strong></p>
    <p>Restaurant: {order.restaurant}</p>
    <p>Amount: ${order.totalAmount}</p>
    <p>Status: {order.status}</p>
  </div>
)

export default OrderCard
