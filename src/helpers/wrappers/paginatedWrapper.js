import styled from "styled-components";

const Wrapper=styled.section`
    padding-top: 1.25rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: .4375rem;



    @media  ( min-width:767px ) {
        grid-template-columns: repeat(3,1fr);
    }
    @media  ( min-width:1000px ) {
        grid-template-columns: repeat(4,1fr);
    }

`







export default Wrapper;