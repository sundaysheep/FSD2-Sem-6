import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import './SinglePageApp.css';

export default function SinglePageApp() {
  return (
    <div>

      {/* <div className='navbar-container'> */}

        <nav className='navbar-primary' style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
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