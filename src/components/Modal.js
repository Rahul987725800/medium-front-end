import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: fit-content;
  background-color: white;
  div.cross {
    width: 80%;
    margin: auto;
    position: relative;
    margin-bottom: 10rem;
    .sign {
      position: absolute;
      padding: 1rem;
      padding-right: 0;
      top: 1rem;
      right: 0;
      font-size: 2rem;
      color: gray;
      cursor: pointer;
      :hover {
        color: black;
      }
    }
  }
  div.content {
    width: 80%;
    margin: auto;
  }
`;

function Modal(props) {
  return (
    <Container>
      <div className="cross">
        <div className="sign" onClick={props.close}>
          &#10005;
        </div>
      </div>
      <div className="content">{props.children}</div>
    </Container>
  );
}

export default Modal;
