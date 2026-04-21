const OrderCard = ({ order }) => (
  <div>
    <p>#{order.orderId} - {order.restaurant} - ${order.totalAmount}</p>
  </div>
)

export default OrderCard
