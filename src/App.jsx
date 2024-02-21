import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Display from './components/Display.jsx'//every component made is imported in App.jsx

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Display/>

    </>
  )
}

export default App
