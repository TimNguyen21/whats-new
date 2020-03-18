import React, { Component } from 'react';
import NewsContainer from "../NewsContainer/NewsContainer"
import Menu from "../Menu/Menu"
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: local
    }
    this.articleTopics = [
      {title: "Local", data: local},
      {title: "Health", data: health},
      {title: "Entertainment", data: entertainment},
      {title: "Science", data: science},
      {title: "Technology", data: technology}
    ]
  }

  currentNewsType = (newsType) => {
    this.setState({news: newsType})
  }

  render () {
    return (
      <main>
        <h1><span>What's</span> New?</h1>
        <Menu articleTopics={this.articleTopics} currentNewsType={this.currentNewsType}/>
        <NewsContainer newsData={this.state.news} />
      </main>
    );
  }
}

export default App;
