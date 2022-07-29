import React from 'react'
import "./App.css"
import Counter from './components/Counter'
import Todos from './components/Todos'
const App = () => {
  return (
    <div className='App' >
      <Counter/>
      <Todos/>
    </div>
  )
}

export default App