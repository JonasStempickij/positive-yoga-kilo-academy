import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  h2 {
    margin: 0;
  }
  section {
    max-width: 352px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
  .plan-option-list {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
  .plan-option {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border: 2px solid rgba(0, 0, 0, 0.08);
    border-radius: 16px;
  }
  .active {
    border: 2px solid #ff9b4e;
  }
  .plan-content {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
  .plan-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;
  }
  .discount {
    background-color: #ffe082;
    padding: 3px 8px;
    border-radius: 6px;
    font-weight: 700;
  }
  .plan-monthly {
    display: flex;
    flex-direction: row;
    column-gap: 4px;
    align-items: flex-end;
  }
  .plan-price {
    display: flex;
    flex-direction: row;
  }
  .plan-old-price {
    text-decoration: line-through;
    margin-right: 8px;
  }
  .highlight {
    color: #ff9b4e;
  }

  .feature-list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  .feature-row {
    display: flex;
    flex-direction: row;
    column-gap: 16px;
    align-items: flex-start;
  }
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 32px;
  }
`;

export default Wrapper;
