import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Wrapper from "../../helpers/wrappers/MoviesTvPagesWrapper";
import { getAllGenres, isInputFilterFalse } from "../../features/genresAndSearch/genresAndSearchSlice";

const TvPage = () => {

  const {tvGenres,isLoading }=useSelector((store)=>store.genresAndSearch)

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getAllGenres())
  }, [])
  
  if (isLoading) {
    return <h2>Loading...</h2>
  }


  return (
    <>
    <h2 className="section" style={{fontWeight:'100',paddingTop:'10px'}} >Search by tv genres</h2>
      <Wrapper className="section">
        {tvGenres.map(({ id, name }, index) => {
          if (index % 2 === 0) {
            return (
              <Link
                to={`/categories/tv/${id}`}
                key={id}
                className="bg-3 item"
                onClick={()=>dispatch( isInputFilterFalse())}
                >
                {name}
              </Link>
            );
          }

          return (
            <Link
            to={`/categories/tv/${id}`}
            key={id}
            className="bg-2 item "
            onClick={()=>dispatch( isInputFilterFalse())}
            >
              {name}
            </Link>
          );
        })}
      </Wrapper>
    </>
  )
}

export default TvPage
