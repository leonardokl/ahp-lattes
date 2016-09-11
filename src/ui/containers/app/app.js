import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {withRouter, Link} from 'react-router';
import NewAlternativeModal from './new-alternative-modal';
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
    case 'home':
    case '/home':
      return {label:'Preferências', link: 'preferencias'};
    case 'preferencias':
    case '/preferencias':
      return {label: 'Voltar', link: 'home'};
    }
  }

  render() {
    return (
      <div>
        <Topbar
          action={this.getTopBarAction()}
          disablePreferences={!!(this.props.app.alternatives.length < 2)}
        />
        <div>
          <Sidebar items={this.props.app.criteria}/>
          <div className={styles.childrenContainer}>
            {this.props.children}
          </div>
        </div>
        <NewAlternativeModal
          newAlternative={this.props.newAlternative}
          handleClose={this.props.onRequestCloseModal}
          onCreateAlternative={this.props.onCreateAlternative}
          criteria={this.props.app.criteria}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
  newAlternative: state.newAlternative,
});

const mapDispatchToProps = (dispatch) => ({
  onCreateAlternative: (data) => {
    dispatch(actions.createAlternative(data));
  },
  onRequestCloseModal: () => {
    dispatch(actions.setNewAlternativeShowModal(false));
  },
  onWillMount: () => {
    dispatch(actions.fetchCriteria());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
