import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
             
             <Route path='/' exact element={<ProtectedRoute><Home /></ProtectedRoute>} />
             <Route path='/login' exact element={<Login/>} />
             <Route path='/register' exact element={<Register/>} />
             <Route path='/booking/:carid' exact element={<ProtectedRoute><BookingCar /></ProtectedRoute>} />
             <Route path='/userbookings' exact element={<ProtectedRoute><UserBookings /></ProtectedRoute>} />
             <Route path='/addcar' exact element={<ProtectedRoute><AddCar /></ProtectedRoute>} />
             <Route path='/editcar/:carid' exact element={<ProtectedRoute><EditCar /></ProtectedRoute>} />
             <Route path='/admin' exact element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
         
             </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;


export function ProtectedRoute({children}){

  if(localStorage.getItem('user'))
  {
    return children
  }
  else{
    return <Navigate to='/login' />
  }

}
