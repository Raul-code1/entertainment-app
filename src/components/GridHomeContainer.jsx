import { Link } from "react-router-dom"
import styled from "styled-components"

import { GeneralCard }from './'

const GridHomeContainer = ({ title ,type,data:{results} }) => {
   
  return (
    <GridHomeWrapper className="animate__animated animate__fadeIn"  >
      <div className="heading">
        <h3><span className="heading-title" >{title}</span> <span className="type-span" >{type}</span> </h3>
      </div>
      <section className="grid-home-section">
        { results?.slice(0,6).map((item,index)=>{
            if (index ===0 || index === 1) {
                return <GeneralCard key={item.id} {...item}  spanCol toSonType ={type} />
            }
            return <GeneralCard spanCol={false} toSonType ={type} key={item.id} {...item} />
        }) }

      </section>
    </GridHomeWrapper>
  )
}

export default GridHomeContainer



const GridHomeWrapper=styled.section`


    margin: 2rem 0rem;

    .heading{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .625rem 0rem;

        .heading-title{
            font-weight: 300;
            color: var(--secondaryTextColor);
        }
    }

    .grid-home-section{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: .4375rem;
    }

    @media  ( min-width:800px ) {
        
        .heading-title{
            font-size: 1.6875rem;
        }

        .grid-home-section{
            grid-template-columns: repeat(3,1fr);
        }
    }

    @media  ( min-width:1000px ) {

        .heading-title{
            font-size: 2rem;
        }

        .grid-home-section{
            grid-template-columns: repeat(4,1fr);
        }
    }

`
