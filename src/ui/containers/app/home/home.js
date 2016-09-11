import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {withRouter} from 'react-router';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import Sidebar from 'ui/components/sidebar';
import Alternatives from './alternatives';
import AddAlternatives from './add-alternatives';
import Results from './results';
import styles from './home.scss';

class App extends React.Component {
  render() {
    const {alternatives, results} = this.props.app;

    return (
      <div className={styles.container}>
        {!alternatives.length ?
          <AddAlternatives onClickAdicionar={this.props.onClickAdicionar}/> :
          [
            <Alternatives
              key={1}
              alternatives={alternatives}
              onClickRemoveAlternative={this.props.onClickRemoveAlternative}
              onClickAdicionar={this.props.onClickAdicionar}
            />,
            <Results key={2} results={results}/>
          ]
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch) => ({
  onClickRemoveAlternative: (index) => {console.log('onClickRemoveAlternative', index);
    dispatch(actions.removeAlternative(index));
  },
  onClickAdicionar: () => {
    dispatch(actions.setNewAlternativeShowModal(true));
  },
  onWillMount: () => {
    dispatch(actions.fetchCriteria());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
