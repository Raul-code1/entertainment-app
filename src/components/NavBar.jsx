import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { navBarItems } from "../utils/navLinks";
import theMovieDbLogo from '../assets/theMovieDbLogo.png'
const NavBar = () => {
  return (
    <NavBarWrapper>
      {navBarItems.map(({ id, path, icon }) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-bars-links active" : "nav-bars-links "
            }
            key={id}
            to={path}
          >
            {icon}
          </NavLink>
        );
      })}
      <NavLink className='logo-tmdb-nav'  to='/theMovieDb' ><img src={theMovieDbLogo} alt='The movie db' className="img"  /></NavLink>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.nav`
  background-color: var(--sideBarBgColor);
  height: var( --navBarHeight);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

 z-index: 99;

 .logo-tmdb-nav{
  height: 30%;
  width: 50px;
 }
  @media  ( min-width:600px ) {
    .nav-bars-links{
      font-size: 2rem
    }
  }

  @media (min-width: 1000px) {
    display: none;
   
  }
`;
