import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { imgLink } from "../utils/apiHelpers";

const GeneralCard = ({
  spanCol,
  toSonType,
  release_date,
  backdrop_path,
  original_title,
  id,
  name,
  first_air_date,
  poster_path,
}) => {
  const navigate = useNavigate();

  const date = moment(release_date || first_air_date).format("YYYY");
  const pathForDetails = `/${toSonType.toLowerCase()}`

  const handleDetailsPageContent=()=>{
    navigate(`${pathForDetails}/${id}`)
  }

  return (
    <CardWrapper
      className={`${spanCol && "span-col-item"}`}
      onClick={ handleDetailsPageContent}
    >
      <div className="img-card-container">
        <img
          src={`${imgLink}${backdrop_path || poster_path}`}
          alt={original_title || name}
          className="img"
        />
      </div>
      <div className="info-card-container">
        <div className="info-first-child">
          <span>{date} -</span>
          <span>{ toSonType.toUpperCase()}</span>
        </div>
        <div className="info-second-child">
          <h4>{original_title || name}</h4>
        </div>
      </div>
    </CardWrapper>
  );
};

export default GeneralCard;

const CardWrapper = styled.div`
  padding-top: 1.25rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: var(--borderRadius);

  .img-card-container {
    overflow: hidden;
    border-radius: var(--borderRadius);
    max-height: 165px;
  }
  .info-card-container {
    padding-top: 0.625rem;

    .info-first-child {
      font-size: 0.625rem;
    }

    .info-second-child {
      h4 {
        font-weight: 100;
      }
      font-size: 0.875rem;
    }
  }

  @media (min-width: 1000px) {
    .info-card-container {
      .info-first-child {
        font-size: 0.9375rem;
      }
      .info-second-child {
        font-size: 1.125rem;
      }
    }
  }
`;
