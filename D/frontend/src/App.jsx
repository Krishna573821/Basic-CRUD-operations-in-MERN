import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DeleteUser from './DeleteUser'
import Successful from './Successful'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DeleteUser/>}/>
      <Route path='/successful' element={<Successful/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
