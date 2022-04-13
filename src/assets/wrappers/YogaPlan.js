import styled from 'styled-components';

const Wrapper = styled.section`
  .plan-option-list {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
  .plan-option {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .plan-content {
    display: flex;
    flex-direction: column;
  }
  .plan-duration {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;
  }
  .discount {
    background-color: #ffe082;
    padding: 3px 8px;
    border-radius: 6px;
  }
  .plan-monthly {
    display: flex;
    flex-direction: row;
    column-gap: 4px;
    align-items: flex-end;
  }
`;

export default Wrapper;
