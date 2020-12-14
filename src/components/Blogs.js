import React from 'react';
import BlogCard from './BlogCard';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';
function Blogs(props) {
  return (
    <div>
      {props.blogs.map((blog) => (
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
              props.history.push({
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

export default withRouter(Blogs);
