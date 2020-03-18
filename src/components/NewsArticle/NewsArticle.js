import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return(
    <article className="article-card" id={props.id}>
      <img className="article-img" src={props.img} />
      <h3>{props.headline}</h3>
      <p>{props.description}</p>
      <a href={props.url} target="_blank">Link to Article</a>
    </article>
  )
}

export default NewsArticle;
