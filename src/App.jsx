import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import TryGlass from '../modules/try-glass/try-glass'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TryGlass/>
    </>
  )
}

export default App
