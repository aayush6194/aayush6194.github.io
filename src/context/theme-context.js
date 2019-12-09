import React, { createContext } from 'react';
export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {   },
});

export class ThemeProvider extends React.Component {

    toggleTheme = () => {
    localStorage.setItem("dark-mode", !this.state.darkMode); 
    this.setState({ darkMode : !this.state.darkMode });
  };


  state = {
  darkMode: false,
  toggleTheme: this.toggleTheme
  };

  componentWillMount(){
    let mode = (localStorage.getItem("dark-mode")? localStorage.getItem("dark-mode") : false) === "true"? true: false; 
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