import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { useEffect, useState } from "react";


const Main = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'night' : 'light';
    setTheme(newTheme);
  };
    return (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} ></Navbar>
          <Outlet></Outlet>  
          <Footer></Footer>
        </>
    );
};

export default Main;