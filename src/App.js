import React, { Component } from 'react';
import './App.css';
import config from './app-config';
import WPRestAPI from './wp-rest-api';

// Custom components
import BlogArticlePreview from './components/blog-article-preview';
import SingleBlogArticle from './components/single-blog-article';
import Footer from './components/footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogArticles: [],
      isActiveArticle: false,
      activeArticle: null,
      postsPerPage: 5,
      currentPage: 1,
    };
  }
  componentDidMount() {
    this.getWPArticleList();
  }
  getWPArticleList() {
    var instance = this;
    WPRestAPI.getPosts(function(success, posts) {
      if (success) {
        instance.setState({ blogArticles: posts });
      }
    });
  }
  returnToArticlePreview(event) {
    event.preventDefault();
    this.setState({
      isActiveArticle: false,
      activeArticle: null,
    });
  }
  renderBackHomeButton() {
    return (
      <div className="blog-back-home-link-wrapper">
        <a href="" className="blog-back-home-link" onClick={this.returnToArticlePreview.bind(this)}>Back</a>
      </div>
    );
  }
  blogArticleClicked(event) {
    event.preventDefault();
    this.setState({
      isActiveArticle: true,
      activeArticle: event.target.dataset.article
    });
  }
  blogArticlePreviewList() {
    return (
      this.state.blogArticles.map((article, index) => {
        return <BlogArticlePreview articleData={article} key={index} articleID={index} clickHandler={this.blogArticleClicked.bind(this)}/>;
      })
    );
  }
  singleBlogArticle() {
    return <SingleBlogArticle articleData={this.state.blogArticles[this.state.activeArticle]} />
  }
  render() {
    return (
      <div className="blog">
        <header className="blog-header">
          <div className="blog-title">{config.title ? config.title : 'My Blog'}</div>
        </header>
        {this.state.isActiveArticle ? this.renderBackHomeButton() : ''}
        {this.state.isActiveArticle ? this.singleBlogArticle() : this.blogArticlePreviewList()}
        <Footer />
      </div>
    );
  }
}

export default App;
