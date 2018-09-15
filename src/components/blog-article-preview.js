import React, { Component } from 'react';
import Utils from './../utils.js'

export default class BlogArticlePreview extends Component {
  render() {
    return (
      <article className="blog-article-preview">
        <h1 className="blog-article-preview-title" dangerouslySetInnerHTML={{__html: this.props.articleData.title ? this.props.articleData.title.rendered : ''}}></h1>
        {/* TODO: Use some default blog thumbnail if upstream does not proide one*/}
        <img className="blog-article-preview-thumbnail"
          src={
            this.props.articleData._embedded['wp:featuredmedia']
            && this.props.articleData._embedded['wp:featuredmedia'][0]
            && this.props.articleData._embedded['wp:featuredmedia'][0].media_details
            && this.props.articleData._embedded['wp:featuredmedia'][0].media_details.sizes
            && this.props.articleData._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail
            ? this.props.articleData._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url : ''
          } alt={
            this.props.articleData._embedded['wp:featuredmedia']
            && this.props.articleData._embedded['wp:featuredmedia'][0]
            && this.props.articleData._embedded['wp:featuredmedia'][0].alt_text
            ? this.props.articleData._embedded['wp:featuredmedia'][0].alt_text : ''
          }>
        </img>
        <p className="blog-article-preview-excerpt" dangerouslySetInnerHTML={{__html: Utils.replace_asset_urls(this.props.articleData.excerpt ? this.props.articleData.excerpt.rendered : '')}}></p>
        <p className="blog-article-preview-read-more">
          <a href="" onClick={this.props.clickHandler} className="blog-article-preview-read-more-button" data-article={this.props.articleID}>Read more...</a>
        </p>
    </article>
    );
  }
}
