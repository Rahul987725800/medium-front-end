import React, { Component } from 'react';
import styled from 'styled-components';
import Blogs from '../components/Blogs';
const Container = styled.div``;

export class CategoryBlogs extends Component {
  state = {
    blogs: [],
  };
  componentDidMount() {
    fetch(
      'http://localhost:8080/categories' +
        this.props.match.url.replaceAll('-', ' ')
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ blogs: data.blogs });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <Container>
        <Blogs blogs={this.state.blogs} />
      </Container>
    );
  }
}

export default CategoryBlogs;
