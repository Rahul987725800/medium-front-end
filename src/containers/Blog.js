import React, { useEffect, useState } from 'react';
import { Container, Title, Subtitle, Content } from './BlogStyles';
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
    <Container>
      <Title>{blog.title}</Title>
      <Subtitle>{blog.subtitle}</Subtitle>
      <Content>
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
                    className="para"
                  ></div>
                </div>
              );
            case 'image':
              return (
                <div key={i} className="image">
                  <div
                    style={{
                      backgroundImage: `url('http://localhost:8080/${obj.value}')`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      height: '80vh',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <p>{obj.caption}</p>
                </div>
              );
            default:
              return null;
          }
        })}
      </Content>
    </Container>
  ) : null;
}

export default Blog;
