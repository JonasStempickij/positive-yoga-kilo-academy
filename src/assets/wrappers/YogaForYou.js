import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  section {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }
  .benefit-list {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
  .benefit-row {
    display: flex;
    flex-direction: row;
    column-gap: 16px;
    align-items: flex-start;
  }
  .phone-box {
    display: flex;
    flex-direction: row;
    column-gap: 9px;
    justify-content: center;
  }
  .phone-one {
    margin-bottom: 33px;
  }
  .phone-two {
    margin-top: 33px;
  }
`;
export default Wrapper;
