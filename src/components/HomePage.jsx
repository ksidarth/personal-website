// import logo from './logo.svg';
import '../App.css';
import React, {Component} from "react";
import About from "../components/about";
// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
import Projects from "../components/projects";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
import Sidebar from "../components/sidebar"
// import Introduction from "./components/introduction"
import Timeline from "../components/timeline"
import '../App.css'

const HomePage = () => {
  return (
        <div id="colorlib-page">
          <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main"> 
            {/* <Introduction></Introduction>      */}
            <About></About>
            <Timeline></Timeline>
            {/* <Projects></Projects> */}
            </div>
            </div>
        </div>
    )
  };

  export default HomePage