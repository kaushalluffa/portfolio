import { Route, Routes } from 'react-router'
import './App.scss'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
function App() {

  return (
    <div className="App" >
     <Navbar/>
     <Routes>
      <Route path="/" element={<Main/>}/>
     </Routes>
    </div>
  )
}

export default App
