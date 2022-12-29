import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { sideBarLinks } from "../utils/navLinks";

const SideBar = () => {
  return (
    <SideBarWrapper>
      <div className="side-bar-container">
        {sideBarLinks.map(({ id, text, path, icon }) => {
          return (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                isActive ? "nav-bars-links active side-bar-links" : "nav-bars-links side-bar-links "
              }
            >
              {text}
              {icon}
            </NavLink>
          );
        })}
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;

const SideBarWrapper = styled.nav`
  display: none;

  @media (min-width: 1000px) {
    display: block;
    background-color: var(--sideBarBgColor);
    width: 55%;
    margin: 0 auto;
    height: 100%;
    border-radius: var(--borderRadius);
    overflow: hidden;
  

    .side-bar-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      .side-bar-links{
        font-size: 1.25rem;
        font-weight: 100;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: var(--transition);
       
      }
      .side-bar-links:hover{
        color: var(--secondaryTextColor);
      }
    }
  }
`;
