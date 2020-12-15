import styled from 'styled-components';
export const Container = styled.div`
  width: 80%;
  margin: auto;
`;
export const BlogInput = styled.div`
  color: gray;
  div {
    outline: none;
  }
  .title {
    font-size: 3.5rem;
  }
  .subtitle {
    font-size: 2.5rem;
  }
  .content {
    font-size: 2rem;
  }
  .caption {
    font-size: 1.3rem;
  }
`;
export const Window = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 10%;
  .title {
    font-size: 1.6rem;
    font-weight: 600;
    color: black;
  }
  .border {
    border-bottom: 1px solid #c9c9c9;
  }
  img {
    width: 100%;
  }
  .subtitle {
    font-size: 1.3rem;
    color: gray;
  }
  .pubtext {
    font-size: 1.6rem;
    color: gray;
  }
  .tag-input {
    border: 1px solid gray;
    background-color: #fffcfc;
    min-height: 2.6rem;
    border-radius: 2px;
    padding: 1rem;
    font-size: 1.3rem;
    .top-row {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      margin: 0;
      .block {
        margin: 0.4rem;
        margin-bottom: 0;
        font-size: 1.2rem;
        padding: 0.3rem 0.6rem;
        border: 1px solid #c9c9c9;
        border-radius: 3px;
        cursor: pointer;
        :hover {
          border-color: gray;
        }
        .cross {
          padding: 0 0.5rem;
          font-size: 0.8rem;
          color: gray;
          font-weight: 900;
          :hover {
            color: black;
          }
        }
      }
    }
    .more-tags-input {
      margin-left: 0.4rem;
      outline: none;
    }
  }
  .buttons {
    button {
      margin: 1rem;
      margin-left: 0;
      padding: 0.3rem 1rem;
      font-family: inherit;
      font-size: 1.4rem;
      border: none;
      outline: none;
      border-radius: 2px;
      background-color: white;
    }
    .styled {
      color: white;
      background-color: #1c9416;
      :hover {
        background-color: #1a7332;
      }
    }
    .simple {
      color: #c2c2c2;
      :hover {
        color: gray;
      }
    }
  }
`;
export const FileInputButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  border: 2px solid #808080;
  border-radius: 50%;
  text-align: center;
  color: #808080;

  :hover {
    border-color: black;
    color: black;
  }
  input {
    /* visibility: hidden; */
    cursor: pointer;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    outline: none;
    opacity: 0;
  }
  span {
    font-size: 3rem;
    font-weight: 300;
    line-height: 2.3rem;
    z-index: 0;
  }
`;
export const PreviewImage = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  img {
    max-width: 100%;
    max-height: 80vh;
    outline: 0.3rem solid transparent;
    :hover {
      outline-color: #1c9416;
    }
  }
`;
