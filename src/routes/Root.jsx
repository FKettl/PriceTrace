import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
import Home from "./Home";
import { useEffect } from 'react';
import { useState } from "react";


function Root () {
  const [renderHome, setRenderHome] = useState(true)
  const homeNeeded = () => setRenderHome(false);
  
  return (
    <>
     <NavBarComponent homeNeeded={homeNeeded}/>
     {renderHome? <Home/>:<Outlet />}
    </>
  );
};

export default Root;