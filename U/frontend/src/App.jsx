import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ChangeMail from './changeMail'
import Successful from './Successful'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ChangeMail/>}/>
      <Route path='/successful' element={<Successful/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
