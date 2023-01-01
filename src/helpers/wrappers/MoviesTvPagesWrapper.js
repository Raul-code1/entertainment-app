import styled from "styled-components";


const Wrapper =styled.section`

display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.25rem;
  padding-top: 1.25rem;

  .item{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.875rem 0rem;
    color: var(--textColor);
    width: 90%;
    margin: 0 auto;
    border-radius: var(--borderRadius);
  }


  .bg-1{
    background-color: #40485e;
  }

  .bg-2{
    background-color: #171E31;
  }

  .bg-3{
    background-color: #248982;
  }

  @media  ( min-width:767px ) {
    grid-template-columns: repeat(3,1fr);
    column-gap: 20px;

    .item{
      padding: 2.1875rem  0rem;
      width: 100%;
    }
  }
  
  
  @media  ( min-width:1000px ) {
    grid-template-columns: repeat(4,1fr);
    .item{
      padding: 2.125rem  0rem;
      font-size: 1.375rem;
    }
  }

`


export default Wrapper;