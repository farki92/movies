import React, { Component } from 'react';
import MovieIndex from './scenes/MovieIndex';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <MovieIndex/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
