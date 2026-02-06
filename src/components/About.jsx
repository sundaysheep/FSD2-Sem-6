import { lazy, Suspense, useState } from "react";
import { ButtonLarge } from "./MaterialUIComponents";
import Image from "../assets/Image.jpg";
import "./LazyLoadingDemo.css";

// Component-Level Lazy Loading (with simulated delay)
const AttendanceChart1 = lazy(() =>{
  setTimeout(() => {
    return import("../components/AttendanceChart");
  }, 1500);
})

const AttendanceChart = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("../components/AttendanceChart"));
    }, 1500);
  })
);

export default function About() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="container lazy-demo">
      <h1>Frontend Optimization Using Lazy Loading</h1>

      <p className="intro">
        <strong>Code Splitting</strong> is the process of breaking your app's JavaScript
        bundle into smaller chunks that load only when needed.{" "}
        <strong>Lazy Loading</strong> is a technique that delays loading components,
        images, or other resources until they are actually required.
      </p>

      <p className="intro highlight">
        This page itself is <strong>route-level lazy loaded</strong>, meaning its code
        was only downloaded when you navigated here.
      </p>

      <div className="lazy-component">
        <h2>Native Image Lazy Loading</h2>
        <p>
          This image uses the browser’s built-in <code>loading="lazy"</code> attribute.
          The image file is only downloaded when it approaches the viewport, reducing
          initial page load time.
        </p>

        <img
          src={Image}
          alt="Lazy Loaded Example"
          loading="lazy"
          className="demo-image"
        />
      </div>

      <div className="lazy-component graph">
        <h2>Conditional + Component-Level Lazy Loading</h2>
        <p>
          The chart component below is loaded only when the button is clicked.
          This demonstrates <strong>conditional lazy loading</strong> (triggered by user
          interaction) and <strong>component-level code splitting</strong> using{" "}
          <code>React.lazy()</code>.
        </p>

        <ButtonLarge
          buttonText={showChart ? "Chart Loaded" : "Show Chart"}
          onClick={() => setShowChart(true)}
        />

        {showChart && (
          <Suspense fallback={<p className="loading-text">Loading attendance chart...</p>}>
            <AttendanceChart />
          </Suspense>
        )}
      </div>
    </div>
  );
}
