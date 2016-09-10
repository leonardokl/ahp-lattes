import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {withRouter, Link} from 'react-router';

import Topbar from './topbar';
import Sidebar from 'ui/components/sidebar';
import styles from './app.scss';

class App extends React.Component {
  componentWillMount() {
    this.props.onWillMount();
  }

  getTopBarAction() {
    const {pathname} = this.props.location;

    switch(pathname) {
    case '/home':
      return {label:'Preferências', link: 'preferencias'};

    case '/preferencias':
      return {label: 'Voltar', link: 'home'};
    }
  }

  render() {
    return (
      <div>
        <Topbar action={this.getTopBarAction()}/>
        <div>
          <Sidebar items={this.props.app.criteria}/>
          <div className={styles.childrenContainer}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch) => ({
  onWillMount: () => {
    dispatch(actions.fetchCriteria());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
