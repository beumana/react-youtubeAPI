import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div>
        <input onChange={(event) => this.setState({term: event.target.value})} />
        Input Value: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;