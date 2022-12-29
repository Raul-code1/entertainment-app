import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { NavBar, SideBar,SearchContainer } from "../../components";

const HomeLayout = () => {
  return (
    <MainWrapper>
      <NavBar />
      <div className="grid-layout" >
        <div className="side-bar-col" >
          <SideBar />
        </div>
        <div className="content-col" >
          <SearchContainer />
          <Outlet />
        </div>
      </div>
    </MainWrapper>
  );
};

export default HomeLayout;

const MainWrapper =styled.main`

  position: relative;
  /* padding-left:  1.5625rem; */

  .grid-layout{
    padding-top:var( --navBarHeight);
  }


  @media  ( min-width:1000px ) {
    

    .grid-layout{
      padding-top: 0px;
      display: grid;
      grid-template-columns: auto 1fr;
      position: relative;

    }

    .side-bar-col,.content-col{
      padding-top: 1.25rem;
    }
    .side-bar-col{
      height: 100vh;
      width: 200px;
      display: grid;
      align-items: center;
      padding-bottom: 1.25rem;
    }
    .content-col{
      height: 100vh;
      overflow-y: scroll;
    }

    .content-col::-webkit-scrollbar{
      background-color: var(--backGroundColor);
    }

  }


`