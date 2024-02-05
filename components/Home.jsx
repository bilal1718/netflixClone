import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import '../App.css';
import Movies from './Movies';
import Footer from './footer';

const Home = ({ AddtoList }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }
    window.addEventListener('scroll', scrollFunction);
  }, []);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className='scroll-container'>
      {showBackToTop && (
        <button className='back-to-top' onClick={backToTop}>
          Back to top
        </button>
      )}
      <Nav />
      <Hero />
      <Movies AddtoList={AddtoList} />
      <Footer />
    </div>
  );
};

export default Home;
