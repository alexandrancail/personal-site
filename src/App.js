// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { pages, homepage } from './app/Pages';

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
        {/* If a user tries to visit a nonexistent path,
            redirect them to the homepage */}
        <Route path="*" element={<Navigate to={homepage["path"]} replace />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
