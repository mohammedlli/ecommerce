import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Website/HomePage';
import Login from './Pages/Website/Login';
import Register from './Pages/Website/Register';
import Users from './Pages/Dashbord/Users';
import GoogleCallBack from './Pages/Website/CoogleCallBack';
import Dashbord from './Pages/Dashbord/Dashbord';
import './Pages/Dashbord/dashbord.css'
import './Components/Dashbord/bare.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RequireAuth from './Pages/Website/RequireAuth';
import User from './Pages/Dashbord/User';
import AddUser from './Pages/Dashbord/AddUser';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/auth/google/callback' element={<GoogleCallBack/>}/>
        <Route element={<RequireAuth/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashbord' element={<Dashbord/>}>
        <Route path='users' element={<Users/>}/>
        <Route path='users/:id' element={<User/>}/>
        <Route path='user/add' element={<AddUser/>}/>
        </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
