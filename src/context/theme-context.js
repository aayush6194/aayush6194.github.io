import React, { createContext } from 'react';
import { safeGetLocalStorage, safeSetLocalStorage } from '../utils/localstorage';

export const ThemeContext = createContext({
  darkMode: true,
  toggleTheme: () => {   },
});

export class ThemeProvider extends React.Component {

    toggleTheme = () => {
    safeSetLocalStorage("dark-mode", !this.state.darkMode); 
    this.setState({ darkMode : !this.state.darkMode });
  };


  state = {
  darkMode: true,
  toggleTheme: this.toggleTheme
  };

  componentWillMount(){
    let mode = safeGetLocalStorage("dark-mode") !== true; 
    this.setState( { darkMode: mode });
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}


export const ThemeConsumer = ThemeContext.Consumer;