import {TotalProvider} from '@context'
import {UnionRouter} from './unionRouter'

import './base/styles/App.css'

function App() {
  return (
    <TotalProvider>
      <UnionRouter />
    </TotalProvider>
  )
}

export default App
