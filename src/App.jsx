import { useState } from 'react'
import Container from './components/Container/Container'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='Main__Container'>
      <Container/>
    </section>
      
    </>
  )
}

export default App
