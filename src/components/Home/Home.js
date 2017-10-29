import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../donald_trump_PNG_00000.png';
import Loading from '../Loading/Loading';
import Carousel from '../Carousel/Carousel';
import SearchBar from './SearchBar';
import './Home.css';

class Home extends Component {
  static propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
    searchInput: PropTypes.string,
  };

  componentDidMount () {
    this.props.fetchData(this.props.searchInput);
  }

  render () {
    return (
      <div className="App container">
        <div className="row">
          <div className="App-header col-sm-12">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-sm-12">
            <SearchBar
              searchInput={this.props.searchInput}
              onInputChange={this.props.onInputChange}
              onKeyPress={this.props.onKeyPress}
              fetchData={this.props.fetchData}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 gif-container">
            {
              this.props.isLoadingData ?
                <Loading /> :
                <Carousel
                  gifs={this.props.data}
                />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
