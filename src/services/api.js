import axios from 'axios'

const API = 'https://t4e-testserver.onrender.com/api'
const ID = 'E0323035'
const SET = 'setA'
const PASS = '635856'

const getToken = async () => {
  const res = await axios.post(`${API}/public/token`, {
    studentId: ID,
    set: SET,
    password: PASS
  })
  return res.data.token
}

export const fetchOrders = async () => {
  const token = await getToken()
  const res = await axios.get(`${API}/private/setA`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
  return res.data.data.orders || []
}
