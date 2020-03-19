import React from 'react';
import NewsArticle from "../NewsArticle/NewsArticle"
import './NewsContainer.css'

const NewsContainer = (props) => {
  return(
    <section className="news-container">
    {props.newsData.map(article =>
        (
          <NewsArticle
          id={article.id}
          key={article.id}
          img={article.img}
          headline={article.headline}
          description={article.description}
          url={article.url}
          />
        )
      )
    }
    </section>
  )
}

export default NewsContainer;
