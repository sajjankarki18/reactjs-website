import React, { useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

export default function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Dark Mode");
  const [alert, setAlert] = useState(false)

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const darkMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Dark Mode");
      showAlert('success', 'Dark mode has been enabled')
    } 
  };
  const lightMode = () => {
    if (mode === "dark") {
      setMode("light");
      setText("Dark Mode");
      showAlert('success', 'Light mode has been enabled')
    } 
  }
  const bodyBackgroundColor = mode === "dark" ? "#212529" : "white";

  useEffect(() => {
    // Smooth scrolling behavior for navbar links
    const navbarLinks = document.querySelectorAll(".navbar-nav a.nav-link");
    navbarLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }, []); // Run only once when the component mounts
  
  return (
    <div>
      <Navbar
        home="Home"
        about="About"
        skills="Skills"
        contact="Contact Me"
        handleDarkmode={darkMode}
        handleLightmode={lightMode}
        mode={mode}
        handleText={text}
      />
      <Alert alert={alert}/>
      <Header mode={mode} />
      <About mode={mode}/>
      <Skills mode={mode}/>
      <Contact mode={mode}/>
      <Footer mode={mode}/>
      <style>
        {`
          body {
            background-color: ${bodyBackgroundColor};
            transition: background-color 0.5s ease;
          }
        `}
      </style>
    </div>
  );
}
