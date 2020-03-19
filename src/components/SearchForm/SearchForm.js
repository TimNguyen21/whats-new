import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super();
    this.state = {
      searchWord: ""
    }
  }

  updateState = (event) => {
    this.setState({searchWord: event.target.value})
  }

  filteredTopic = (event) => {
    event.preventDefault();
    const currentSearchWord = this.state.searchWord.toLowerCase();
    const filteredTopic = this.props.currentTopic.filter(topic => topic.headline.toLowerCase().includes(currentSearchWord));
    this.props.filterTopic(filteredTopic);
    this.setState({searchWord: ""})
  }

  render() {
    return(
      <form>
        <input
        name="searchWord"
        placeholder="Search Article"
        onChange={this.updateState}
        value={this.state.searchWord}
        />
        <button onClick={this.filteredTopic}>Search</button>
      </form>
    )
  }

}

export default SearchForm;
