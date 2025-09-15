import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Forecast from './pages/dashboard/Forecast'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Forecast></Forecast>}></Route>
      </Routes>
    </Router> 
  )
}

export default App
