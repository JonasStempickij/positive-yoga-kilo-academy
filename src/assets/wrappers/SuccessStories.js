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
      max-width: 352px;
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
