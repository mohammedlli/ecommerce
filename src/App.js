import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Website/HomePage';
import Login from './Pages/Website/Login';
import Register from './Pages/Website/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
