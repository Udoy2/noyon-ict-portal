import './App.css';
import Navbar from './components/nav'
import Hero from './components/hero'
import Slide from './components/carousel';

function App() {
  return (
    <>
    <div className="App h-full w-full bg-no-repeat bg-cover">
      <Navbar/>
      <Hero/>
      <Slide/>
    </div>
    </>
  );
}

export default App;
