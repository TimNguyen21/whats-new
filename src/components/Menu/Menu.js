import React from 'react';
import './Menu.css'

const Menu = (props) => {
  const navMenu = props.articleTopics.map(topic => (
    <button key={topic.title} onClick={() => props.currentNewsType(topic.data)}>{topic.title}</button>
  ))

  return(
    <nav>
      {navMenu}
    </nav>
  )
}

export default Menu;
