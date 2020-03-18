import React from 'react';
import './Menu.css'

const Menu = (props) => {
  return(
    <nav>
    {props.articleTopics.map(topic => (
      <button onClick={() => props.currentNewsType(topic.data)}>{topic.title}</button>
    ))}
    </nav>
  )
}

export default Menu;
