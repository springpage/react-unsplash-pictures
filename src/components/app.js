import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import PictureList from '../containers/picture_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PictureList />
      </div>
    );
  }
}
