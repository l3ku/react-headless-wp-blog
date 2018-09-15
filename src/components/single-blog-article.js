import React, { Component } from 'react';
import Utils from './../utils.js'

export default class SingleBlogArticle extends Component {
  render() {
    return (
      <article className="blog-article">
        <h1 className="blog-article-title" dangerouslySetInnerHTML={{__html: this.props.articleData.title ? this.props.articleData.title.rendered : ''}}></h1>
        <img className="blog-article-featured-image"
          src={
            this.props.articleData._embedded['wp:featuredmedia']
            && this.props.articleData._embedded['wp:featuredmedia'][0]
            && this.props.articleData._embedded['wp:featuredmedia'][0].media_details
            && this.props.articleData._embedded['wp:featuredmedia'][0].media_details.sizes
            && this.props.articleData._embedded['wp:featuredmedia'][0].media_details.sizes.large
            ? this.props.articleData._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url : ''
          } alt={
            this.props.articleData._embedded['wp:featuredmedia']
            && this.props.articleData._embedded['wp:featuredmedia'][0]
            && this.props.articleData._embedded['wp:featuredmedia'][0].alt_text
            ? this.props.articleData._embedded['wp:featuredmedia'][0].alt_text : ''
          }>
        </img>
        <p className="blog-article-content" dangerouslySetInnerHTML={{__html: Utils.replace_asset_urls(this.props.articleData.content ? this.props.articleData.content.rendered : '')}}></p>
      </article>
    );
  }
}
