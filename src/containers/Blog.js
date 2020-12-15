import React, { useEffect, useState } from 'react';

function Blog(props) {
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    // console.log(props);
    const query = new URLSearchParams(props.location.search);
    const blogId = query.get('id');
    // console.log(blogId);
    fetch('http://localhost:8080/blogs/' + blogId + '?complete=true')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlog(data.blog);
        console.log(data.blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.location.search]);
  return blog ? (
    <div>
      <p>{blog.title}</p>
      <p>{blog.subtitle}</p>
      <div>
        {blog.content.map((obj, i) => {
          switch (obj.type) {
            case 'para':
              return (
                <div key={i}>
                  <div
                    dangerouslySetInnerHTML={{ __html: obj.value }}
                    style={{
                      whiteSpace: 'pre',
                    }}
                  ></div>
                </div>
              );
            case 'image':
              return (
                <div key={i}>
                  <div
                    style={{
                      backgroundImage: `url('http://localhost:8080/${obj.value}')`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      height: '80vh',
                    }}
                  >
                    <p>{obj.caption}</p>
                  </div>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  ) : null;
}

export default Blog;
