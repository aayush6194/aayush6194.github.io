import React, { createContext } from 'react';

export const ModalContext = createContext({
  modal: false,
  toggleModal: () => {   },
  setText: ()=>{},
  text: null
});

export class ModalProvider extends React.Component {
    closeModal = () => {
    this.setState({ modal : false , text: null});
  };

  displayModal = (text) => {
    this.setState({ modal : true, text: text });
  };


  state = {
    modal: false,
    text:null,
    displayModal: this.displayModal,
    closeModal: this.closeModal
  };

  render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}


export const ModalConsumer = ModalContext.Consumer;