import { useEffect, useState } from "react";
import "./Navbar.css";

const App = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
      <div className="container">
        <div className="box box--1"></div>
        <div className="box box--2"></div>
        <div className="box box--3"></div>
        <div className="box box--4"></div>
        <div className="box box--5"></div>
      </div>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
    </>
  );
};

export default App;