import React, { Component } from 'react';
import AppContext from '../../context';

class ButtonEditEmployee extends Component {
  state = {
    edit: false,
  };

  handleClick = () => {
    this.setState(prevState => ({
      edit: !prevState.edit,
    }));
  };
  render() {
    const { edit } = this.state;
    return (
      <AppContext.Consumer>
        {context => {
          return (
            <button
              className="EmployeePanelPage__list--btn btn waves-effect waves-light grey lighten-5 submit"
              onClick={() => this.handleClick()}
            >
              {edit ? 'Zapisz Zmiany' : 'Edytuj Pracownika'}
            </button>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default ButtonEditEmployee;
