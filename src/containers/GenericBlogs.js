import React, { useState, useEffect } from 'react';
import { Container, Category } from './GenericBlogsStyles';
import Blogs from './Blogs';
import { connect } from 'react-redux';

function GenericBlogs(props) {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [categoryIntersection, setCategoryIntersection] = useState(true);
  const [activeCategories, setActiveCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/blogs?title=1&subtitle=1&categories=1')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        setAllBlogs(data.blogs);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (categoryIntersection) {
      setBlogs(
        allBlogs.filter((b) => {
          for (let cat of activeCategories) {
            if (!b.categories.includes(cat)) return false;
          }
          return true;
        })
      );
    } else {
      setBlogs(
        allBlogs.filter((b) => {
          for (let cat of b.categories) {
            if (activeCategories.includes(cat)) return true;
          }
          return false;
        })
      );
    }
  }, [activeCategories, allBlogs, categoryIntersection]);
  let loadCategory = (categoryLoaded) => {
    if (activeCategories.indexOf(categoryLoaded) >= 0) {
      setActiveCategories((pc) => pc.filter((c) => c !== categoryLoaded));
      return;
    }
    setActiveCategories((pc) => [categoryLoaded, ...pc]);
  };
  return (
    <Container>
      {blogs && <Blogs blogs={blogs} />}
      <div className="categories">
        <div>
          <label>Category Intersection</label>
          <input
            type="radio"
            name="selectionType"
            onChange={() => setCategoryIntersection(true)}
            checked={categoryIntersection}
          ></input>
          <label>Category Union</label>
          <input
            type="radio"
            name="selectionType"
            onChange={() => setCategoryIntersection(false)}
            checked={!categoryIntersection}
          ></input>
        </div>
        {props.categories.map((cat) => (
          <Category
            key={cat.name}
            onClick={() => loadCategory(cat.name)}
            active={activeCategories.includes(cat.name)}
          >
            {cat.name}
          </Category>
        ))}
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.blog.categories,
  };
};

export default connect(mapStateToProps)(GenericBlogs);
