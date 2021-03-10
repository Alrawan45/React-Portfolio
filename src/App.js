
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import About from './components/About/About'

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
