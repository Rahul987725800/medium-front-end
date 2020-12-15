import React from 'react';
import BlogCard from '../components/BlogCard';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';

export class Blogs extends React.Component {
  state = {
    blogs: [],
  };
  componentDidMount() {
    // console.log('blogs mounted');
    // console.log(this.props.blogs);
    for (let id of this.props.blogs) {
      fetch(`http://localhost:8080/blogs/${id}?title=1&subtitle=1&categories=1`)
        .then((res) => res.json())
        .then((data) => {
          this.setState((ps) => {
            return {
              blogs: [...ps.blogs, data.blog],
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <div>
        {this.state.blogs.map((blog) => (
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
