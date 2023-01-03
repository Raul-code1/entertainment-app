import { useState } from "react";
import styled from "styled-components";
import { FcSearch } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {  handlePage, isInputFilterTrue } from "../features/genresAndSearch/genresAndSearchSlice";

const SearchContainer = () => {

  const navigate =useNavigate();
  const dispatch=useDispatch()

  const [inputValue, setInputValue] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    if (!inputValue) {
      console.log('please provide a value');
      return
    }

    dispatch(isInputFilterTrue())
    dispatch(handlePage(1))

    const pathData={ text: inputValue,path:'search'}

    navigate(`/categories/search/${inputValue}`)

    setInputValue('')
  }

  return (
    <SearchWrapper className="section">
      <form className="form" onSubmit={handleSubmit} >
        <FcSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search movies or tv series "
          className="search-input"
          value={inputValue}
          onChange={({target})=>setInputValue(target.value)}
        />
        <button type="submit" className="btn search-btn ">Search</button>
      </form>
    </SearchWrapper>
  );
};

export default SearchContainer;

const SearchWrapper = styled.section`
  margin-top: 0.625rem;
  height: 8vh;
  
  .form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .search-icon {
      font-size: 1.875rem;
    }
    
    .search-input {
      min-width: 70%;
      height: 100%;
      outline: none;
      border: none;
      background-color: var(--backgroundColor);
      background-color: #171E31;
      border-radius: var(--borderRadius);
      padding: 0rem 1.125rem;
      color: var(--textColor);
    }
  }

  @media (min-width: 1000px) {
    .form {
      .search-input {
        width: 90%;
        font-size: 1.25rem;
      }

      .search-btn {
        font-size: 1.125rem;
      }
    }
  }
`;
