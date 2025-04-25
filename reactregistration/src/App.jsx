import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './component/Login'
import Registration from './component/Registration'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Registration/>} />
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
