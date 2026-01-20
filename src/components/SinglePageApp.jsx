import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import './SinglePageApp.css';
import { ButtonSmallLink } from './MaterialUIComponents';
import Button from '@mui/material/Button';

export default function SinglePageApp() {
  return (
    <div>

      {/* <div className='navbar-container'> */}

        <nav className='navbar-primary' style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
          <ButtonSmallLink buttonText="Home" linkTo="/"/>
          <ButtonSmallLink buttonText="About" linkTo="/about"/>
          <ButtonSmallLink buttonText="Contact" linkTo="/contact"/>
          <ButtonSmallLink buttonText="Dashboard" linkTo="/dashboard"/>
        </nav>

      {/* </div> */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}