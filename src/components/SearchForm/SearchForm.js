import React, { Component } from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE

class SearchForm extends Component {
  constructor(props) {
    super();
    this.state = {
      searchWord: ""
    }
  }

  filteredTopic = () => {

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
        <button>Search</button>
      </form>
    )
  }


}

export default SearchForm;
