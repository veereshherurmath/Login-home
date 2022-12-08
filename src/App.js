import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='Home' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
