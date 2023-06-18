import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Room from './components/Room'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar/> 
      <Home/>
      <Shop/>
      <Room/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
