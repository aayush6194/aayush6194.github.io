import React, { createContext } from 'react';
import api from '../api';

export const UserContext = createContext({
  user: undefined,
  setUser: () => {   },
});

export class UserProvider extends React.Component {
    setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user)); 
    api.signin(user).catch((e)=>console.log('Error Connecting to the server!'));
    this.setState({ user  });
  };

  state = {
   user : undefined,
   setUser: this.setUser 
};

  componentWillMount(){
    try{
        let user = localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null? JSON.parse(localStorage.getItem('user')): undefined;
        if(user !== undefined){
            this.setState({ user });
            api.signin(user).catch((e)=>console.log('Error Connecting to the server!'));
        }
    }catch(e){
        console.log(e);
      }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;