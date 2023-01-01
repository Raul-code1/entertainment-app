import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { InfoDetails } from "../../components";
import { imgLink } from "../../utils/apiHelpers";
import { getDetailsContentPage } from "../../features/details/detailsSlice";


const DetailsPage = () => {
  const { movieOrTv, isLoading, path } = useSelector((store) => store.details);
  const dispatch = useDispatch();

  const { id }=useParams()

  useEffect(() => {
    dispatch(getDetailsContentPage(id));
  }, [path,id])
  

  if (isLoading) {
    return <h2>Loading Content...</h2>;
  }
  

  return (
    <DetailsWrapper className="section">
      {/* Details image container */}
      <div className="img-details-container">
        <img className="img" src={`${imgLink}${movieOrTv?.poster_path || movieOrTv?.backdrop_path}`}  />
      </div>
      {/* Details image container */}
      <div className="details-info-container">
        <InfoDetails {...movieOrTv} />
      </div>
    </DetailsWrapper>
  );
};

export default DetailsPage;

const DetailsWrapper = styled.section`
  padding: 0.9375rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img-details-container {
    overflow: hidden;
    width: 70%;
    margin: 0 auto;
    img {
      border-radius: var(--borderRadius);
    }
  }

  @media (min-width: 600px) {
    .img-details-container {
      width: 50%;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;

    .img-details-container {
      width: 30%;
    }

    .details-info-container {
      width: 70%;
    }
  }
`;
