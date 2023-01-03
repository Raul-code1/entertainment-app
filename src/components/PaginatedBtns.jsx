import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handlePage } from "../features/genresAndSearch/genresAndSearchSlice";

const PaginatedBtns = () => {
  const dispatch = useDispatch();
  const { totalPages, page, maxPages } = useSelector(
    (store) => store.genresAndSearch
  );

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > totalPages) {
      newPage = 1;
    }
    dispatch(handlePage(newPage));
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = totalPages;
    }
    dispatch(handlePage(newPage));
  };

  return (
    <Wrapper className="section">
      <div className="btns-container">
        {totalPages > 1 && (
          <>
            <div className="icon-paginated" onClick={prevPage}>
              <AiFillFastBackward />
            </div>
            <div className="pages">
              Page <span className="bold">{page}</span> of{" "}
              <span className="bold">
                {totalPages !== 1 ? totalPages : "1"}
              </span>{" "}
            </div>
            <div className="icon-paginated" onClick={nextPage}>
              <AiFillFastForward />
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default PaginatedBtns;

const Wrapper = styled.div`
  padding: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .btns-container {
    display: flex;
    overflow: hidden;
    border-radius: var(--borderRadius);
    font-size: .875rem;

    .pages {
      background-color: var(--textColor);
      color: var(--backgroundColor);
    }

    .icon-paginated {
      cursor: pointer;
      transition: var(--transition);
    }

    .icon-paginated:hover {
      background-color: var(--textColor);
      color: var(--backgroundColor);
    }

    .bold {
      font-weight: bold;
    }

    div {
      padding: 0.625rem 1.25rem;
      border: 2px solid #ffffff;
    }
  }
`;
