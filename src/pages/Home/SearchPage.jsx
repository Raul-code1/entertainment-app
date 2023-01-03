import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "../../helpers/wrappers/paginatedWrapper";
import { getGenreOrSearchData } from "../../features/genresAndSearch/genresAndSearchSlice";
import { Link, useParams } from "react-router-dom";
import { GeneralCard, Loading, PaginatedBtns } from "../../components";

const SearchPage = () => {
  const { type, filter } = useParams();

  const {
    page,
    genreOrSearchInputData: { results },
    isLoading,
    errorMessage,
  } = useSelector((store) => store.genresAndSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenreOrSearchData({ text: filter, path: type }));
  }, [page, type, filter]);

  
  if (isLoading) {
    return <Loading color='#fff' type='spin'  />;
  }

  if (results?.length === 0) {
    return (
      <>
        <h2 className="section">
          No content found with this name: " {filter} " <br />
        <Link to="/" style={{fontSize:'18px',textDecoration:'underline'}} >Back Home</Link>
        </h2>
      </>
    );
  }

  if (errorMessage) {
    return <h2 className="section">{errorMessage}</h2>;
  }

  return (
   <>
     <Wrapper className="section animate__animated animate__fadeIn">
      {results?.map((item) => {
        if (item.media_type) {
          return (
            <GeneralCard
              spanCol={false}
              toSonType={item.media_type}
              key={item.id}
              {...item}
            />
          );
        }
        return (
          <GeneralCard
            spanCol={false}
            toSonType={type}
            key={item.id}
            {...item}
          />
        );
      })}
    </Wrapper>
    <PaginatedBtns />
   </>
  );
};

export default SearchPage;
