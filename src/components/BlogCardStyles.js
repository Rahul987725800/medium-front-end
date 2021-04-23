import styled from 'styled-components';
export const Card1 = styled.div`
  margin: 3px;
  cursor: pointer;
  max-width: 25vw;
  .categories {
  }
  .title {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .subtitle {
    font-size: 1.4rem;
    color: #919191;
  }

  .image {
    max-height: 40vh;
  }
`;
export const Card2 = styled.div`
  margin: 3px;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  max-height: 30vh;
  .content {
    flex: 3;
  }
  .categories {
  }

  .title {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .subtitle {
    font-size: 1rem;
    color: #919191;
  }
  .imgContainer {
    flex: 1;
    text-align: center;
  }
  .image {
    max-height: 100%;
    max-width: 100%;
  }
`;
