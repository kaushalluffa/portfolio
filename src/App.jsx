import { Route, Routes } from 'react-router'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
function App() {

  return (
    <div className="App" >
     <Navbar/>
     <Routes>
      <Route path="/" element={''}/>
     </Routes>
    </div>
  )
}

export default App
