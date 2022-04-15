import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  .faq-list {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
  .faq-item {
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 16px;
  }
  .faq-header {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .faq-answer {
    display: flex;
    margin-top: 16px;
    transition: all 0.3s ease-in;
  }
  .hide {
    display: none;
  }
  @media screen and (min-width: 1000px) {
    align-items: center;
    .faq-list {
      width: 736px;
    }
  }
`;

export default Wrapper;
