import React, { Component } from 'react';
import { text, getRandomCategories } from '../text';
import {
  Container,
  BlogInput,
  Window,
  FileInputButton,
  PreviewImage,
} from './CreateBlogStyles';
import Modal from '../components/Modal';

export class CreateBlog extends Component {
  state = {
    title: '',
    subtitle: '',
    content: [],
    contentForServer: [],
    categories: [],
    modalOnScreen: false,
    imagePicked: null,
    plusOffset: 0,
    showPlus: false,
  };
  componentDidMount() {
    this.setState({
      content: [this.contentElement('Tell your story...', 0)],
    });
  }
  handleSubmit = () => {
    // fetch('http://localhost:8080/blogs', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: this.state.title,
    //     subtitle: this.state.subtitle,
    //     content: this.state.content,
    //     categories: this.state.categories,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log(this.state.title);
    console.log(this.state.subtitle);
    console.log(this.state.contentForServer);
    console.log(this.state.categories);
  };
  closeModal = () => {
    this.setState({
      modalOnScreen: false,
    });
  };
  contentElement = (defaultText, index) => {
    return (
      <div
        className="content"
        contentEditable
        suppressContentEditableWarning={true}
        onFocus={(e) => {
          if (e.target.textContent === defaultText) {
            e.target.textContent = '';
            e.target.style.color = 'black';
          }
          this.setState({
            plusOffset: document.body.scrollHeight - 40,
            showPlus: true,
          });
        }}
        onBlur={(e) => {
          if (e.target.textContent === '') {
            e.target.textContent = defaultText;
            e.target.style.color = 'gray';
          } else {
            this.setState((ps) => {
              const updatedContentForServer = [...ps.contentForServer];
              updatedContentForServer[index] = {
                type: 'para',
                value: e.target.textContent,
              };
              return {
                contentForServer: updatedContentForServer,
              };
            });
          }
        }}
        onKeyDown={(e) => {
          // console.log(e.key);
          if (e.key === 'Enter') {
            // console.log(document.body.scrollHeight);
            this.setState({
              showPlus: true,
              plusOffset: document.body.scrollHeight,
            });
          } else {
            this.setState({
              showPlus: false,
            });
          }
        }}
      >
        {defaultText}
      </div>
    );
  };
  inputElement = (text, alias) => {
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
  render() {
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
        <Container>
          <BlogInput>
            {this.state.showPlus && (
              <FileInputButton
                style={{
                  position: 'absolute',
                  top: this.state.plusOffset - 35 + 'px',
                  left: '5%',
                }}
              >
                <span>&#43;</span>
                <input
                  type="file"
                  onChange={(e) => {
                    // console.log(e.target.files[0]);
                    this.setState(
                      (ps) => {
                        // console.log(ps.content);
                        return {
                          content: [
                            ...ps.content,
                            <PreviewImage>
                              <img
                                src={URL.createObjectURL(e.target.files[0])}
                                alt="choice"
                              />
                              {this.inputElement(
                                'Type caption for image (optional)',
                                'caption'
                              )}
                            </PreviewImage>,
                          ],
                          contentForServer: ps.contentForServer.concat({
                            type: 'image',
                            value: e.target.files[0],
                          }),
                        };
                      },
                      () => {
                        this.setState(
                          (ps) => {
                            return {
                              content: [
                                ...ps.content,
                                this.contentElement('', ps.content.length),
                              ],
                            };
                          },
                          () => {
                            console.log(this.state.content);
                            console.log(this.state.contentForServer);
                          }
                        );
                      }
                    );
                  }}
                />
              </FileInputButton>
            )}
            {this.inputElement('Title', 'title')}
            {this.inputElement('Subtitle', 'subtitle')}
            <div>
              {this.state.content.map((el, i) => (
                <div key={i}>{el}</div>
              ))}
            </div>
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
        </Container>
      </>
    );
  }
}

export default CreateBlog;
