import { Routes, Route, Link } from 'react-router-dom';
import {lazy, Suspense} from 'react';
import Home from './Home';
// import About from './About';
import Contact from './Contact';
import Form from './Form';
import './SinglePageApp.css';
import { ButtonSmallLink } from './MaterialUIComponents';
import Button from '@mui/material/Button';

const About = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./About"));
    }, 1500); 
  })
);

export default function SinglePageApp() {
  return (
    <div>

      {/* <div className='navbar-container'> */}

        <nav className='navbar-primary' style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
          {/* <ButtonSmallLink buttonText="Home" linkTo="/"/> */}
          <ButtonSmallLink buttonText="FE-Optimization" linkTo="/"/>
          <ButtonSmallLink buttonText="State Management" linkTo="/contact"/>
          <ButtonSmallLink buttonText="MUI-Form" linkTo="/form"/>
        </nav>

      {/* </div> */}

      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={
            <Suspense fallback={<div className='page-loader'>Lazy Loading this Page ...</div>}>

              <About />

            </Suspense>
            } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
    </div>
  );
}