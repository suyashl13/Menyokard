import { Outlet } from 'react-router-dom'
import RootProvider from './RootProvider'

function App() {
  return (
    <RootProvider>
      <Outlet/>
    </RootProvider>
  )
}

export default App
