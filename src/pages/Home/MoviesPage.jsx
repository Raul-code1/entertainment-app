import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Wrapper from "../../helpers/wrappers/MoviesTvPagesWrapper";
import { getAllGenres, handlePage, isInputFilterFalse } from "../../features/genresAndSearch/genresAndSearchSlice";

const MoviesPage = () => {

  const {movieGenres,isLoading }=useSelector((store)=>store.genresAndSearch)

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getAllGenres())
  }, [])
  
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  const handleClick = () =>{
    dispatch( isInputFilterFalse())
    dispatch( handlePage(1))
  }

  return (
    <>
    <h2 className="section" style={{fontWeight:'100',paddingTop:'10px'}} >Search by movies genres</h2>
      <Wrapper className="section">
        {movieGenres.map(({ id, name }, index) => {
          if (index % 2 === 0) {
            return (
              <Link
                to={`/categories/movie/${id}`}
                key={id}
                className="bg-2 item"
                onClick={handleClick}
                >
                {name}
              </Link>
            );
          }

          return (
            <Link
              to={`/categories/movie/${id}`}
              key={id}
              className="bg-1 item "
              onClick={handleClick}
            >
              {name}
            </Link>
          );
        })}
      </Wrapper>
    </>
  );
};

export default MoviesPage;
