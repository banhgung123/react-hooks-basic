import './App.scss';
import { useState } from 'react';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0);

  const handleHeroClick = () => {}

  return (
    <div className="app">
      <h1>React hook - Clock</h1>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name="ReactJS Redux" onClick={() => handleHeroClick}/>
    </div>
  );
}

export default App;
