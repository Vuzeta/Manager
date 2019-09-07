import React, { Component } from 'react';
import { AppContext } from '../../context';
import { withRouter } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
                confirmAlert({
                  message: 'Czy napewno chcesz usunąć pracownika?',
                  buttons: [
                    {
                      label: 'TAK',
                      onClick: () => {
                        this.state.routeChange();
                        context.deleteEmployee(this.props.workerID);
                      },
                    },
                    {
                      label: 'NIE',
                      onClick: () => {
                        return;
                      },
                    },
                  ],
                });
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
