import React, { Component } from 'react';

export default class BlogPageSelector extends Component {
  render() {
    return (
      <div className="blog-next-page-wrapper">
        {this.props.currentPage > 1 ? this.renderPreviousPageButton() : ''}
        {this.props.blogArticlesAmount > this.props.postsPerPage ? this.renderSpecificPageButtons() : ''}
        {this.props.blogArticlesAmount > this.props.postsPerPage ? this.renderNextPageButton() : ''}
      </div>
    );
  }
  renderNextPageButton() {
    return (
      <a href ="" className="blog-next-page-link" onClick={this.props.nextPageClickHandler}>{'>>'}</a>
    );
  }
  renderPreviousPageButton() {
    return (
      <a href ="" className="blog-previous-page-link" onClick={this.props.previousPageButtonClickHandler}>{'<<'}</a>
    );
  }
  renderSpecificPageButtons() {
    var amountOfPages = Math.floor(this.props.blogArticlesAmount / this.props.postsPerPage) + 1;
    var pages = []
    for ( var pageIndex = 0; pageIndex < amountOfPages; ++pageIndex ) {
      pages[pageIndex] = (pageIndex - 1 === this.props.currentPage);
    }
    return (
      pages.map((isActive, index) => {
        return (
          <a href="" className={'blog-specific-page-link' + isActive ? 'blog-specific-page-link-active' : ''} data-page={index + 1} onClick={this.props.specificPageButtonClickHandler}>{index + 1}</a>
        );
      })
    );
  }
}
