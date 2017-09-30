import  React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { keyword: 'double double toil and trouble' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.keyword}
          onChange={e => this.setState({ keyword: e.target.value})}/>
      </div>
    );
  }
}

export default SearchBar;
