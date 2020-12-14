import React from 'react';
import styled from 'styled-components';
const Card = styled.div`
  border: 1px solid red;
  cursor: pointer;
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
`;

function BlogCard(props) {
  let categories = '';
  for (let cat of props.categories) {
    categories += ` ${cat} And`;
  }
  categories = categories.substring(0, categories.length - 3);
  return (
    <Card onClick={props.click}>
      <p className="categories">
        <span style={{ color: '#919191' }}>in</span> &nbsp; {categories}
      </p>
      <p className="title">{props.title}</p>

      <p className="subtitle">{props.subtitle}</p>
    </Card>
  );
}

export default BlogCard;
