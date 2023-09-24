import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Streams from './Pages/Streams';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/streams' element={<Streams/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
