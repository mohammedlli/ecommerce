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
import Writer from './Pages/Dashbord/Writer'
import Err404 from './Pages/Website/404';
import RequireBack from './Pages/Website/RequireBack';
import Categories from './Pages/Dashbord/Categories';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<RequireBack/>}>
      <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Route>
        <Route path='/auth/google/callback' element={<GoogleCallBack/>}/>
        <Route path='/*' element={<Err404/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route element={<RequireAuth allowedRole={["1996","1995","1999"]}/>}>
        <Route path='/dashbord' element={<Dashbord/>}>
        <Route element={<RequireAuth allowedRole={["1995"]}/>}>
        <Route path='users' element={<Users/>}/>
        <Route path='users/:id' element={<User/>}/>
        <Route path='user/add' element={<AddUser/>}/>
        </Route>
        <Route element={<RequireAuth allowedRole={["1999","1995"]}/>}>
        <Route path='prutacts' element={<Categories/>}/>
        </Route>
        <Route element={<RequireAuth allowedRole={["1996","1995"]}/>}>
        <Route path='writer' element={<Writer/>}/>
        </Route>
        </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
