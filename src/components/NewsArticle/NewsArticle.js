import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE

const NewsArticle = (props) => {
  return(
    <article className="article-card" id={props.id}>
      <img className="article-img" src={props.img} />
      <h2>{props.headline}</h2>
      <p>{props.description}</p>
      <a href={props.url} target="_blank">Link to Article</a>
    </article>
  )
}

export default NewsArticle;
