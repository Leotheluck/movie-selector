import React, { useState } from "react";
import ArrowDown from "../Header/img/ArrowDown.png";
import ArrowUp from "../Header/img/ArrowUp.png";
import { SidebarData } from "./SidebarData";
import Mascot from "./img/Mascott.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebar, setState] = useState(false);

  const handleSidebar = () => {
    setState(!sidebar);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-dropdown">
          <div className="sidebar-left">
            <h4>Nouveautés</h4>
            <div className="new-cercle">
              <div className="cercle"></div>
            </div>
          </div>
          <div className="sidebar-right" onClick={handleSidebar}>
            <img src={sidebar ? ArrowUp : ArrowDown} alt="arrow" />
          </div>
        </div>
        <div className="sidebar-nav" sidebar={sidebar}>
          {sidebar && (
            <div className="inner-sidebar-nav">
              <div className="left">
                {SidebarData.map((item, index) => {
                  return (
                    <div className="sidebar-item" key={index}>
                      <div className="new-cercle">
                        {item.icon ? <div className="cercle"></div> : null}
                      </div>
                      <div className="title-item">
                        <p>{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="sidebar-img">
                <div className="mascot">
                  <img src={Mascot} alt="mascot" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
