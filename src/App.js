import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Pages/Home/Foods/Breakfast/Breakfast';
import Dinner from './Pages/Home/Foods/Dinner/Dinner';
import Foods from './Pages/Home/Foods/Foods';
import Lunch from './Pages/Home/Foods/Lunch/Lunch';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/breakfast' element={<Breakfast />} />
          <Route path='/lunch' element={<Lunch />} />
          <Route path='/dinner' element={<Dinner />} />
        </Route>
        <Route path='/foods' element={<Foods />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
