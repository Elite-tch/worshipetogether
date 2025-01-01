"use client"
import HeroPage from "./components/Hero/Hero";
import AboutSub from "./components/About-hero/About";
import Join from "./components/Join/Join";
import Sermons from "./components/Sermon/Sermon";
import HousePage from "./components/House/House";

import Articles from "./components/Article/Article";
import Footer from "./components/Footer/Footer";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="">
<HeroPage/>
<AboutSub/>
<Join/>
<Sermons/>
<HousePage/>
<Articles/>
<Footer/>
    </div>
  );
}
