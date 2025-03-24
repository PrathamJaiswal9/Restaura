
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Dishes from './Components/Dishes'
import Expertise from './Components/Expertise'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Mission from './Components/Mission'
import Navbar from './Components/Navbar'
import Review from './Components/Review'

function App() {
  return (
    <main className='overflow-y-hidden text-neutral-200 '>
    <Navbar/>
    <Hero/>
    <Dishes/>
    <About/>
    <Mission/>
    <Expertise/>
    <Review/>
    <Contact/>
    <Footer/>
    </main>
  )
}

export default App
