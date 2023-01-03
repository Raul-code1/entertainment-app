import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Loading = ({type , color}) => {
  return (
    <Wrapper>
        <ReactLoading type={type} color={color}  height={200} width={100}  />
    </Wrapper>
  )
}

export default Loading


const Wrapper =styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;

`