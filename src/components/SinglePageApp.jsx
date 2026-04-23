import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Contact from './Contact';
import Form from './Form';
import './SinglePageApp.css';
import { ButtonSmallLink } from './MaterialUIComponents';

const About = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./About'));
    }, 1500);
  })
);

export default function SinglePageApp() {
  return (
    <div>
      <nav
        className="navbar-primary"
        style={{ padding: '10px', borderBottom: '1px solid #ccc' }}
      >
        {/* Form shown on first load */}
        <ButtonSmallLink buttonText="MUI-Form" linkTo="/" />

        {/* Other pages */}
        <ButtonSmallLink buttonText="FE-Optimization" linkTo="/about" />
        <ButtonSmallLink buttonText="State Management" linkTo="/contact" />
      </nav>

      <main>
        <Routes>
          {/* First load page */}
          <Route path="/" element={<Form />} />

          {/* Lazy loaded About page */}
          <Route
            path="/about"
            element={
              <Suspense
                fallback={
                  <div className="page-loader">
                    Lazy Loading this Page ...
                  </div>
                }
              >
                <About />
              </Suspense>
            }
          />

          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}