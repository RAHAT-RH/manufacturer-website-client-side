import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/LogIn SignUp Page/Login/Login';
import SignUp from './component/LogIn SignUp Page/Login/SingUp/SignUp';
import About from './component/pages/About/About';
import Blogs from './component/pages/Blogs/Blogs';
import Contact from './component/pages/Contact/Contact';
import Home from './component/pages/Home/Home';
import Profile from './component/Profile/Profile';
import Navbar from './component/shared/Navbar/Navbar';

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
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
