import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 18px;
  }
  .stars {
    display: flex;
    flex-direction: row;
  }
  .hide {
    display: none;
  }
  .btn-control {
    display: flex;
    flex-direction: row;
    align-self: center;
  }
`;

export default Wrapper;
