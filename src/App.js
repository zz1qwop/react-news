import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center sm:w-4/5">
        <Header />
        <div className="flex flex-col items-center sm:items-start sm:flex-row">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
