import React from 'react';
import BlogCard from '../components/BlogCard';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';

export class Blogs extends React.Component {
  state = {
    loadedBlogs: [],
    blogIds: [],
    loadedTill: 10,
  };
  loadBlogs = () => {
    // console.log('fetching blogs');
    for (
      let i = this.state.loadedBlogs.length;
      i < this.state.loadedTill && i < this.state.blogIds.length;
      i++
    ) {
      fetch(
        `http://localhost:8080/blogs/${this.state.blogIds[i]}?title=1&subtitle=1&categories=1`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.blog);
          this.setState((ps) => {
            return {
              loadedBlogs: ps.loadedBlogs.concat(data.blog),
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  componentDidMount() {
    // console.log('blogs mounted');
    // console.log(this.props.blogs);
    this.setState(
      {
        blogIds: this.props.blogs,
      },
      this.loadBlogs
    );
    window.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        // you're at the bottom of the page
        // console.log('Bottom of page');
        // console.log(this.state.loadedTill);
        if (this.state.loadedBlogs.length === this.state.loadedTill) {
          this.setState((ps) => {
            return {
              loadedTill: ps.loadedTill + 10,
            };
          }, this.loadBlogs);
        }
      }
    };
  }

  render() {
    return (
      <div>
        {this.state.loadedBlogs.map((blog) => (
          <div key={blog._id}>
            <BlogCard
              title={blog.title}
              subtitle={blog.subtitle}
              categories={blog.categories}
              click={() => {
                const query = {
                  id: blog._id,
                };
                // console.log(blog.title);
                let title = blog.title.replaceAll(' ', '-');
                this.props.history.push({
                  pathname: '/blogs/' + title,
                  search: qs.stringify(query),
                });
              }}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Blogs);
