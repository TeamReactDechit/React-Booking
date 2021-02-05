import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import '../css/Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [activeId, setActiveId] = useState(1);
  return (
    <div className="float-start">
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='nav-menu-part active'>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <span key={index} className={item.cName}>
                  <Link to={item.path} className={activeId === item.id ? "active" : ""} onClick={() => setActiveId(item.id)}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </span>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;