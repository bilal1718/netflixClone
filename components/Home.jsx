import React from 'react'
import Nav from "./Nav";
import Hero from "./Hero";
import "../App.css";
import Movies from "./Movies";
import Footer from "./footer";

const Home = ({AddtoList}) => {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Movies AddtoList={AddtoList} />
      <Footer />
      </div>
  )
}

export default Home