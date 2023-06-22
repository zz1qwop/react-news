import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-4/5">
        <Header />
        <div className="flex">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
