import Slider from "react-slick";
import styled from "styled-components";


import SlidersCards from "./SlidersCards";

const SliderComponent = ({ data:{results},text }) => {

  //Slider settings from react-slick
  const settings = {
    infinite: true,
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
      <h2>Trending <span className="type-span" >{text}</span></h2>
      <Slider {...settings}>
        { results?.map((items)=>{
          return <SlidersCards key={items.id}  {...items} />
        })  }
      </Slider>
    </Wrapper>
  )
}

export default SliderComponent

const Wrapper=styled.div`

  h2{
    font-weight: 200;
    
  }

`
 
