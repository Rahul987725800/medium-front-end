import React, { Component } from 'react';
import styled from 'styled-components';
import Blogs from '../components/Blogs';
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
export class GenericBlogs extends Component {
  state = {
    blogs: [],
  };
  componentDidMount() {
    fetch('http://localhost:8080/blogs')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ blogs: data.blogs });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  loadCategory = (category) => {
    this.props.history.push('/' + category.replaceAll(' ', '-'));
  };
  render() {
    return (
      <Container>
        <Blogs blogs={this.state.blogs} />
        <div className="categories">
          {this.props.categories.map((cat) => (
            <Category
              key={cat.name}
              onClick={() => this.loadCategory(cat.name)}
            >
              {cat.name}
            </Category>
          ))}
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.blog.categories,
  };
};

export default connect(mapStateToProps)(GenericBlogs);
