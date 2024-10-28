import {QueryClientProvider} from '@/shared/providers'
import { Home } from '../pages'

import './styles/global.css'

function App() {

  return (
    <QueryClientProvider>
      <Home/>
    </QueryClientProvider>
  )
}

export default App
