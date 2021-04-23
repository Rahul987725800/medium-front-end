import React from 'react';
import { Card1, Card2 } from './BlogCardStyles';
import dogImg from '../images/dog.jpg';
import reactImg from '../images/react.png';
import bangleImg from '../images/bangle.jpg';

function BlogCard(props) {
  let categories = '';
  for (let cat of props.categories) {
    categories += ` ${cat} And`;
  }
  categories = categories.substring(0, categories.length - 3);
  let content = (
    <>
      <div className="imgContainer">
        <img
          src={Math.random() < 0.5 ? bangleImg : dogImg}
          alt="dog"
          className="image"
        ></img>
      </div>
      <div class="content">
        <p className="categories">
          <span style={{ color: '#919191' }}>in</span> &nbsp; {categories}
        </p>
        <p className="title">{props.title}</p>

        <p className="subtitle">{props.subtitle}</p>
      </div>
    </>
  );

  switch (props.card) {
    case 1:
      return <Card1 onClick={props.click}>{content}</Card1>;
    case 2:
      return <Card2 onClick={props.click}>{content}</Card2>;
    default:
      return <Card1 onClick={props.click}>{content}</Card1>;
  }
}

export default BlogCard;
