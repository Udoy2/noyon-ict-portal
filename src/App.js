import './App.css';
import Navbar from './components/nav'
import Hero from './components/hero'
import About from './components/About';
import Footer from './components/footer'

function App() {
  return (
    <>
    <div className="App h-full w-full">
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
