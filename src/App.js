import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/pages/About/About';
import Blogs from './component/pages/Blogs/Blogs';
import Contact from './component/pages/Contact/Contact';
import Home from './component/pages/Home/Home';
import Profile from './component/Profile/Profile';
import Login from './component/LogINSignUp/Login/Login';
import SignUp from './component/LogINSignUp/SignUp/SignUp';
import Navbar from './component/shared/Navbar/Navbar';
import RequireAuth from './component/LogINSignUp/RequireAuth/RequireAuth'
import RequireAdmin from './component/LogINSignUp/RequireAdmin/RequireAdmin'
import Dashboard from './component/pages/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './component/pages/Dashboard/AddProduct';
import Purchase from './component/pages/Purchase/Purchase';
import MyOrders from './component/pages/Dashboard/MyOrders';
import ManageOrders from './component/pages/Dashboard/ManageOrders';
import AddReview from './component/pages/Dashboard/AddReview';
import AllUsers from './component/pages/Dashboard/AllUsers';
import Payment from './component/pages/Dashboard/Payment';
import MyProfile from './component/pages/Dashboard/MyProfile';
import NotFound from './component/pages/NotFound/NotFound';
import Footer from './component/shared/Footer/Footer';
import AllShowProducts from './component/pages/Home/AllShowProducts/AllShowProducts';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='allUsers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
        </Route>
       <Route path="/purchase/:id" element={
         <RequireAuth>
         <Purchase></Purchase>
       </RequireAuth>
       }>
       </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/allShowProducts" element={<AllShowProducts></AllShowProducts>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
