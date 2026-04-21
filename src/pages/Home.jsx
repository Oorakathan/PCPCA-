import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Order Management</h1>
    <Link to="/orders"><button>Orders</button></Link>
    <Link to="/filter"><button>Filter</button></Link>
    <Link to="/stats"><button>Stats</button></Link>
  </div>
)

export default Home
