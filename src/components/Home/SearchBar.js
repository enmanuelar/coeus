import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import './Home.css';

class SearchBar extends Component {
  static propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    searchInput: PropTypes.string,
  };

  render () {
    return (
      <div>
        <TextField
          inputStyle={{ color: 'rgba(241, 217, 217, 0.87)', }}
          value={this.props.searchInput}
          onChange={this.props.onInputChange}
          onKeyPress={e => this.props.onKeyPress(e, this.props.searchInput)}
        />
        <FlatButton
          label="Find Gif"
          primary
          onClick={() => this.props.fetchData(this.props.searchInput)}
        />
      </div>
    );
  }
}

export default SearchBar;
