import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    console.log("toggle theme");
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage theme={theme} toggleTheme={toggleTheme}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
