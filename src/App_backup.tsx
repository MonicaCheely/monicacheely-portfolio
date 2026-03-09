import React from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Timeline from "./components/Timeline";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Timeline />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;