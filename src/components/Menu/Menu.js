import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE
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
