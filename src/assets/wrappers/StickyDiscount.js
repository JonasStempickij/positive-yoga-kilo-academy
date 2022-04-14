import styled from 'styled-components';

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 18px 0px;
  display: flex;
  justify-content: center;
  background-color: #90caf9;
  color: white;
  h5 {
    color: white;
    font-weight: 400;
  }
  svg {
    margin-right: 16px;
  }
  b {
    margin: 0px 4px;
  }
`;

export default Wrapper;
