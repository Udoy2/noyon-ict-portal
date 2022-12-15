import './App.css';
import Navbar from './components/nav'
import Hero from './components/hero'

function App() {
  return (
    <>
    <div className="App h-full w-full bg-no-repeat bg-cover">
      <Navbar/>
      <Hero/>
    </div>
    </>
  );
}

export default App;
