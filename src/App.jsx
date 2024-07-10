import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Statebasics from './components/Statebasics'
import Navbar from './components/Nav'
import First from './components/First'
import StateBasics from './components/Statebasics'
import Counter from './components/Counter'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
				<Route path='/' element={<First/>}/>
				<Route path='/c' element={<Counter/>}/>
				<Route path='/sb' element={<StateBasics/>}/>
			</Routes>
    </>
  )
}

export default App
