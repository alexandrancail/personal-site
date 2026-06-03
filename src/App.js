// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import pages from './app/Pages';

function App() {
  // Revisit this logic - might cause problems later on...
  // Router should change the value of this??? Is this possible...
  const [isHomepage, setIsHomepage] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar isHomepage={isHomepage}/>
      </div>
      <Routes>
        {pages.map(page => {
          return <Route path={page["path"]} element={page["element"]}/>
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
