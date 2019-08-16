import React, { Component } from 'react';
import AppContext from '../../context';
import { withRouter } from 'react-router-dom';

class ButtonRemoveEmployee extends Component {
  state = {
    routeChange: this.routeChange.bind(this),
  };

  routeChange() {
    let path = `/employees`;
    this.props.history.push(path);
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => {
          return (
            <button
              className="EmployeePanelPage__list--btn btn waves-effect waves-light grey lighten-5 submit"
              onClick={() => {
                if (window.confirm('Czy napewno chcesz usunąć pracownika?')) {
                  this.state.routeChange();
                  context.deleteEmployee(this.props.id);
                } else {
                  return;
                }
              }}
            >
              Usuń pracownika
            </button>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default withRouter(ButtonRemoveEmployee);
