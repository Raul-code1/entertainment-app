import moment from "moment/moment";
import styled from "styled-components";
import CastDetailsSlider from "./CastDetailsSlider";

import StarsReviews from "./StarsReviews";

const InfoDetails = ({
  original_title,
  name,
  runtime,
  original_language,
  vote_average,
  tagline,
  release_date,
  first_air_date,
  status,
  genres,
  overview,
  homepage,
  number_of_episodes
}) => {

  const date =moment(release_date || first_air_date).format('YYYY-MM-DD')

  return (
    <Wrapper className="animate__animated animate__pulse " >
      <h1>{original_title || name}</h1>
      <p className="tagline" >{tagline}</p>
      <div>
        { homepage && <a className='website-btn btn' href={homepage} target="_blank" >Website</a>}
      </div>
      <StarsReviews number={vote_average} />
      <div className="characteristics">
        <div>
          <p className="headings">{runtime ? "Runtime:":'Episodes:'}</p>
          <p className="headings-childs" >{runtime ? `${runtime} mins` :number_of_episodes}</p>
        </div>
        <div>
          <p className="headings">Language</p>
          <p className="headings-childs" >{original_language}</p>
        </div>
        <div>
          <p className="headings">{release_date ? "Release day" : "First air"}</p>
          <p className="headings-childs" >
            {date}
          </p>
        </div>
        <div>
          <p className="headings">Status</p>
          <p className="headings-childs" >{status}</p>
        </div>
      </div>
      <div className="genres">
        <h5 className="headings" >{genres && "Genres"}</h5>
        <div  >
        {genres?.map((g) => {
          return <p className="genres-box" key={g.id}>{g.name}</p>;
        })}
        
        </div>
      </div>
      <div className="overview">
        <p className="headings" >Overview</p>
        <p className="headings-childs" >{overview}</p>
      </div>
      <CastDetailsSlider />
    </Wrapper>
  );
};

export default InfoDetails;


const Wrapper =styled.div`

  padding-top: .625rem;

  div{
    padding: .625rem 0rem ;
    
  }
  
  h1{
    font-weight: 400;
    font-size: 1.125rem;
    text-align: center;
  }
  
  .tagline{
    font-weight: 100;
    font-size: 1rem;
    padding: .625rem 0rem ;
  }
  
  .characteristics{
    display: flex;
    justify-content: space-between;
    font-size: .9375rem;
   }

  .headings{
      font-weight: 200;
    }

     .headings-childs{
      font-weight: 100;
    }

  .genres{
    word-wrap: break-word;
   h5{
    font-weight: 200;
   }
    p{
      font-weight: 100;
    }

    div{
      display: flex;
      gap: 1.125rem;
      flex-direction: column;
    }
    
    .genres-box{
      border: 1px solid #ffffff;
      width: 30%;
      padding: .625rem;
      border-radius: var(--borderRadius);
    }
    
  }

  .website-btn{
    padding: .625rem 1.5625rem ;
  }

  @media  ( min-width:800px ) {
    text-align: justify;
    padding-left: 3.125rem;
    padding-top: 0rem;
    h1{
      text-align: justify;
      font-size: 2.5rem;
    }

    .tagline{
      font-size: 1.875rem;
    }

    .headings{
      font-size: 1.4375rem;
    }

    .headings-childs{
      font-size: 1.0625rem;
    }
    .genres{
      div{
      flex-direction: row;
    }
    
    .genres-box{
      width: auto;
      border-radius: var(--borderRadius);
    }

    }
  }

`