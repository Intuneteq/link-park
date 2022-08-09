import React from "react";

import Experience from "../../Components/Experience/Experience";
import Header from "../../Components/Header/Header";
import School from "../../Components/School/School";
import Navbar from "../../Components/Navbar/Navbar";
import Statistics from "../../Components/Statistics/Statistics";
import Parent from "../../Components/Parent/Parent";
import Footer from "../../Components/Footer/Footer";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Experience />
      <School />
      <Statistics />
      <Parent />
      <Footer />
    </div>
  );
};

export default Home;
