import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  .story {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
    row-gap: 18px;
    max-width: 352px;
    min-height: 607px;
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
    column-gap: 16px;
    align-self: center;
  }

  .btn-carousel {
    background-color: white;
    border: none;
  }
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .success-stories {
      display: flex;
      flex-direction: row;
      column-gap: 16px;
    }
    .story {
      display: flex;
      align-items: flex-start;
    }
    .btn-control {
      display: none;
    }
    .hide {
      display: inherit;
    }
  }
`;

export default Wrapper;
