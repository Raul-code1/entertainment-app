import styled from "styled-components";
import {AiOutlineSmile} from 'react-icons/ai'
import { Link } from "react-router-dom";
const TheMovieDb = () => {
  return (
    <Wrapper className="section">
      <h1>
        <span className="light-green">The Movie Db</span>
      </h1>
      <p>All the data of movies and tv series used for this project comes from the api the movie db </p>
      <a href="https://www.themoviedb.org/" 
         target="_blank" >you can visit their website by clicking here <AiOutlineSmile/> </a>

    <Link to='/' className="btn" >Back Home</Link>
    </Wrapper>
  );
};

export default TheMovieDb;

const Wrapper = styled.main`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.25rem;
justify-content: center;
  padding: 3.125rem;
  height: 90vh;

  a{
    color: #01b4e4;
    text-decoration: underline;
  }

  .btn{
    color: black;
    text-decoration: none;
  }

  .light-green {
    color: #90cea1;
  }

  .light-blue {
    color: #01b4e4;
  }

  .dark-blue {
    color: #0d253f;
  }

  @media  ( min-width:800px ) {
    h1 span {
      font-size: 100px;
    }
    
    p,a{
      
      font-size: 1.875rem;
    }
  }

`;
