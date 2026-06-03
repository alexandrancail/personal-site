// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { pages } from './app/Pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navigation bar */}
        <NavBar />
      </div>
      {/* Router that serves up different page components when different
          paths are accessed (see Navbar for page link buttons) */}
      <Routes>
        {pages.map(page => {
          return <Route path={page["path"]} element={page["element"]}/>
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
