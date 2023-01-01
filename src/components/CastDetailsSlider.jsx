import { useSelector } from "react-redux"
import Slider from "react-slick"
import styled from "styled-components";

const CastDetailsSlider = () => {

    const {cast:{cast}}=useSelector((store)=>store.details)

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              arrows:false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              arrows:false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          }
        ]
      };
  return (
    <Wrapper>
        <h3>Cast</h3>
      <Slider  {...settings}>
        {cast?.map((person)=>{
            return <div className="cast-box " key={person.id} >{person.original_name || person.name}</div>
        })}
      </Slider>
    </Wrapper>
  )
}

export default CastDetailsSlider


const Wrapper=styled.div`

display: none;

@media screen and ( min-width:1200px ) {
    display: block;
    
    .cast-box{
        border: 1px solid #ffffff;
        text-align: center;
        border-radius: var(--borderRadius);

    }
}


`