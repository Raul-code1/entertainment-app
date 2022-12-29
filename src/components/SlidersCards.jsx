import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import moment from "moment/moment";

import { imgLink } from "../utils/apiHelpers";

const SlidersCards = ({
  title,
  backdrop_path,
  release_date,
  id,
  name,
  first_air_date,
  media_type,
}) => {
  const navigate = useNavigate();
  const date = moment(release_date || first_air_date).format("YYYY");

  return (
    <SliderCardWrapper onClick={() => navigate(`/${media_type}/${id}`)}>
      <img src={`${imgLink}${backdrop_path}`} alt={title} className="img" />
      <div>
        <p className="date">{date}</p>
        <p>{title || name}</p>
      </div>
    </SliderCardWrapper>
  );
};

export default SlidersCards;

const SliderCardWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  margin: 10px;
  cursor: pointer;

  img {
    opacity: 0.5;
  }

  div {
    position: absolute;
    bottom: 15%;
    left: 5%;
    p {
      font-weight: 400;
      font-size: 1.0625rem;
    }
    .date {
      font-weight: 100;
    }
  }

  @media (min-width: 1000px) {
    p {
      font-size: 1.1875rem;
    }
  }
`;
