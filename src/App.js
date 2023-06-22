import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
