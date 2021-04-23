import React from 'react';
import BlogCard from '../components/BlogCard';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';
function Blogs(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
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
            card={2}
          />
        </div>
      ))}
    </div>
  );
}

export default withRouter(Blogs);
/*
window.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        // you're at the bottom of the page
        // console.log('Bottom of page');
        if (loadedBlogs.length === loadedTill) {
          setLoadedTill(loadedTill + 10);
          loadBlogs();
        }
      }
    };
*/
