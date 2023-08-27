import './App.css'
import PhonePage from './pages/PhonePage'
import { Route, Routes } from 'react-router-dom'
import Error from './pages/error'
import PhoneDetails from './pages/phoneDetails'
function App() {
  
  return (
    <>
    <Routes>
    <Route path='/' element={<PhonePage />} />
    <Route path='/phone/:phoneId' element={<PhoneDetails />} />
    <Route path='/error' element={<Error />} />

      </Routes>
    </>
  )
}

export default App
