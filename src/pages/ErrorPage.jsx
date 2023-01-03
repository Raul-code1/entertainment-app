import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImSad } from "react-icons/im";

const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>404 not found</h1> <ImSad className="error-icon" />
      <div>
        <Link to='/' className="btn" >Back home</Link> <br />
        
      </div>
    </Wrapper>
  );
};

export default ErrorPage;

const Wrapper = styled.div`

  width: 90%;
  margin: 0 auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h1{
    letter-spacing: var(--letterSpacing);
    font-size: 1.875rem;
  }

  .error-icon{
    font-size: 2rem;
  }
`;
