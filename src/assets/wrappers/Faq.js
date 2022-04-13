import styled from 'styled-components';

const Wrapper = styled.section`
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .faq-answer {
    display: none;
  }
`;

export default Wrapper;
