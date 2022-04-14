import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Pages/Home/Foods/Breakfast/Breakfast';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/breakfast' element={<Breakfast />} />
          <Route path='/lunch' element={<Breakfast />} />
          <Route path='/dinner' element={<Breakfast />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
