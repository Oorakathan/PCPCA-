const API = 'https://t4e-testserver.onrender.com/api'
const ID = 'E0323035'
const SET = 'setA'
const PASS = '635856'

const getToken = async () => {
  const res = await fetch(`${API}/public/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ studentId: ID, set: SET, password: PASS })
  })
  const data = await res.json()
  return data.token
}

export const fetchOrders = async () => {
  const token = await getToken()
  const res = await fetch(`${API}/private/setA`, { headers: { 'Authorization': `Bearer ${token}` } })
  const data = await res.json()
  return data.data.orders || []
}
