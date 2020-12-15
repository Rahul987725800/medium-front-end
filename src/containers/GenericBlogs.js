import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Blogs from './Blogs';
import { connect } from 'react-redux';

const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  .categories {
    align-self: start;
    display: flex;
    flex-wrap: wrap;
  }
`;
const Category = styled.span`
  padding: 0.5rem 1rem;
  margin: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  color: #7a7a7a;
  cursor: pointer;
  font-size: 1.1rem;
`;

function GenericBlogs(props) {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data.blogs.map((blog) => blog._id)))
      .catch((err) => console.log(err));
  }, []);
  let loadCategory = (category) => {
    props.history.push('/' + category.replaceAll(' ', '-'));
  };
  return (
    <Container>
      {blogs && <Blogs blogs={blogs} />}
      <div className="categories">
        {props.categories.map((cat) => (
          <Category key={cat.name} onClick={() => loadCategory(cat.name)}>
            {cat.name}
          </Category>
        ))}
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.blog.categories,
  };
};

export default connect(mapStateToProps)(GenericBlogs);
