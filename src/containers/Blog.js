import React, { useEffect, useState } from 'react';

function Blog(props) {
  const [blog, setBlog] = useState();
  let loadBlog = (blogId) => {
    fetch('http://localhost:8080/blogs/' + blogId + '?complete=true')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlog(data.blog);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    // console.log(props);
    const query = new URLSearchParams(props.location.search);
    const blogId = query.get('id');
    // console.log(blogId);
    if (!blog) loadBlog(blogId);
  });
  return blog ? (
    <div>
      <p>{blog.title}</p>
      <p>{blog.subtitle}</p>
      <p>{blog.content}</p>
    </div>
  ) : null;
}

export default Blog;
