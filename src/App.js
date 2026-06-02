// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  // Revisit this logic - might cause problems later on...
  // Router should change the value of this??? Is this possible...
  const [isHomepage, setIsHomepage] = useState(true);

  return (
    <div className="App">
      <NavBar isHomepage={isHomepage}/>
    </div>
  );
}

export default App;
