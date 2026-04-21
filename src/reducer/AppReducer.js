const appReducer = (state, action) => {
  if (action.type === 'SET_ORDERS') return { ...state, orders: action.payload, loading: false, error: null }
  if (action.type === 'SET_ERROR') return { ...state, error: action.payload, loading: false }
  if (action.type === 'UPDATE_ORDER_STATUS') 
    return { ...state, orders: state.orders.map(o => o.orderId === action.payload.orderId ? { ...o, status: action.payload.status } : o) }
  return state
}

export default appReducer
