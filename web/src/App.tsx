import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Habit } from './components/Habits'
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Habit completed={3}/>
    </div>
  )
}

export default App
