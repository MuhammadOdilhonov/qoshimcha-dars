import { Outlet } from 'react-router';
import './App.css';
import NavbarPage from './page/navbar/Navbar';
import Footer from './page/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
