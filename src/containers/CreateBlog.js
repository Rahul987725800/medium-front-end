import React, { Component } from 'react';
import { text, getRandomCategories } from '../text';
import { BlogInput, Window } from './CreateBlogStyles';
import Modal from '../components/Modal';

export class CreateBlog extends Component {
  state = {
    title: '',
    subtitle: '',
    content: '',
    categories: [],
    modalOnScreen: false,
  };
  handleSubmit = () => {
    fetch('http://localhost:8080/blogs', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        subtitle: this.state.subtitle,
        content: this.state.content,
        categories: this.state.categories,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  closeModal = () => {
    this.setState({
      modalOnScreen: false,
    });
  };
  render() {
    let inputElement = (text, alias) => {
      return (
        <div
          className={alias}
          contentEditable
          suppressContentEditableWarning={true}
          onFocus={(e) => {
            if (e.target.textContent === text) {
              e.target.textContent = '';
              e.target.style.color = 'black';
            }
          }}
          onBlur={(e) => {
            if (e.target.textContent === '') {
              e.target.textContent = text;
              e.target.style.color = 'gray';
            } else {
              this.setState({
                [alias]: e.target.textContent,
              });
            }
          }}
        >
          {text}
        </div>
      );
    };
    return (
      <>
        <button
          onClick={() => {
            fetch('http://localhost:8080/blogs', {
              method: 'POST',
              body: JSON.stringify({
                title:
                  'A Full-Length Machine Learning Course in Python for Free',
                subtitle:
                  'Dodgers name Clayton McCullough their new first base coach',
                content: text,
                categories: getRandomCategories(),
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
          }}
        >
          create random blog
        </button>
        {this.state.modalOnScreen ? (
          <Modal close={this.closeModal}>
            <Window>
              <div className="story">
                <p className="title">Story Preview</p>
                <img
                  src="https://images.unsplash.com/photo-1607533018176-dab607ee70e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                  alt="story"
                />
                <p className="title border">{this.state.title}</p>

                <p className="subtitle border">{this.state.subtitle}</p>

                <p className="subtitle">
                  <span
                    style={{
                      fontWeight: 'bold',
                    }}
                  >
                    Note:
                  </span>{' '}
                  Changes here will affect how your story appears in public
                  places like SkillBuddy’s homepage — not the story itself.
                </p>
              </div>
              <div className="publish">
                <p className="pubtext">
                  Publishing to: <span className="title">Rahul Gupta</span>
                </p>
                <p style={{ fontSize: '1.2rem' }}>
                  Add or change tags (up to 5) so readers know what your story
                  is about
                </p>
                <div className="tag-input">
                  <div className="top-row">
                    {this.state.categories.map((cat, i) => (
                      <p className="block" key={i}>
                        {cat}
                        <span
                          className="cross"
                          onClick={() => {
                            this.setState((ps) => {
                              return {
                                categories: ps.categories.filter(
                                  (c) => c !== cat
                                ),
                              };
                            });
                          }}
                        >
                          &#10005;
                        </span>
                      </p>
                    ))}
                  </div>
                  <div
                    className="more-tags-input"
                    contentEditable
                    suppressContentEditableWarning={true}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        // console.log(e.target.textContent)
                        this.setState(
                          (ps) => {
                            return {
                              categories: [
                                ...ps.categories,
                                e.target.textContent,
                              ],
                            };
                          },
                          () => {
                            e.target.textContent = '';
                          }
                        );
                      }
                    }}
                  ></div>
                </div>
                <div className="buttons">
                  <button className="styled" onClick={this.handleSubmit}>
                    Publish now
                  </button>
                  <button className="simple" onClick={this.closeModal}>
                    Schedule for later
                  </button>
                </div>
              </div>
            </Window>
          </Modal>
        ) : null}
        <div>
          <BlogInput>
            {inputElement('Title', 'title')}
            {inputElement('Subtitle', 'subtitle')}
            {inputElement('Tell your story...', 'content')}
          </BlogInput>
          <button
            onClick={() => {
              this.setState({
                modalOnScreen: true,
              });
            }}
          >
            Publish
          </button>
        </div>
      </>
    );
  }
}

export default CreateBlog;
