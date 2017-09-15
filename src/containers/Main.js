import React, { Component } from 'react';
import Main from '../components/Main/Main';
import { getResource } from '../utils/Request';

class MainContainer extends Component {
    state = {
        gifs: []
    };
    componentDidMount () {
        getResource('hello').then((response) => {
                console.log(response)
                this.setState((prevState, props) => {
                    return {gifs: response}
                });
            }
        ).catch(error => console.error(error));
    };
    render () {
        return (
            <Main
                gifs={this.state.gifs}
            />
        );
    }
}

export default MainContainer;
