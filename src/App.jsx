import { AppProvider } from './context/AppContext'
import AppRouter from './router/AppRouter'

const App = () => (
  <AppProvider>
    <AppRouter />
  </AppProvider>
)

export default App