import React, { Component } from 'react';
import styled from 'styled-components';
import Blogs from './Blogs';
import { connect } from 'react-redux';
const Container = styled.div``;

export class CategoryBlogs extends Component {
  state = {
    blogs: null,
  };
  componentDidMount() {
    const categoryLoaded = this.props.match.url
      .replaceAll('-', ' ')
      .substring(1);
    // console.log(categoryLoaded);
    const blogs = this.props.categories.find(
      (cat) => cat.name === categoryLoaded
    ).blogs;
    // console.log(blogs);
    this.setState({ blogs });
  }
  render() {
    return (
      <Container>
        {this.state.blogs && <Blogs blogs={this.state.blogs} />}
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.blog.categories,
  };
};

export default connect(mapStateToProps)(CategoryBlogs);
