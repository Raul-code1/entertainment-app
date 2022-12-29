import styled from "styled-components";
import { FcSearch } from "react-icons/fc";


const SearchContainer = () => {
  return (
    <SearchWrapper className="section">
      <form className="form">
        <FcSearch className="search-icon" />
        <input type="text" placeholder="Search movies or tv series " className="search-input" />
        <button className="btn search-btn ">Search</button>
      </form>
    </SearchWrapper>
  );
};

export default SearchContainer;

const SearchWrapper = styled.section`
  margin-top: .625rem;
  height: 8vh;

  .form{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .search-icon{
      font-size: 1.875rem;
    }

    .search-input{
      min-width: 70%;
      height: 100%;
      outline: none;
      border: none;
      background-color: var( --backgroundColor);
      color: var(--textColor);
    }
  }

  @media  ( min-width:1000px ) {
      .form{
        .search-input{
          width: 90%;
          font-size: 1.5625rem;

        }

        .search-btn{
          font-size: 1.125rem;
        }
      }
  }

`;
