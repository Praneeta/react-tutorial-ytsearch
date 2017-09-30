import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBVmrrVrGinCVQuIyv9kJbfSj7PC7jsNes';

YTSearch({key: API_KEY, term: 'double double toil and trouble'}, (data) => {
  console.log(data);
})

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
