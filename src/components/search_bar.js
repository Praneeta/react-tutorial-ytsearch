import  React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { keyword: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.keyword}
          onChange={e => this.onInputChange (e.target.value)} />
      </div>
    );
  }

  onInputChange(keyword) {
    this.setState({ keyword });
    this.props.onSearchTermChange(keyword);
  }

}

export default SearchBar;
