import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import { Link } from "react-router-dom";

import "./index.css";

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <nav>
        <div className='nav-links'>
          <Link className="links" to="/">Welcome</Link>
          <Link className="links" to="/characters">Characters</Link>
          <Link className="links" to="/locations">Locations</Link>
          <Link className="links" to="/episodes">Episodes</Link>
        </div>
      </nav>
     
      <AppRouter />
    
    </main>
    
  );
}
