import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Skills from './Components/Skills'
import Process from './Components/Process'
import Gallery from './Components/Gallery'
import Work from './Components/Work'
import Services from './Components/Services'
import ParaSlider from './Components/ParaSlider'
import Partners from './Components/Partners'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Process />
      <Gallery />
      <Work />
      <Services />
      <ParaSlider />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
