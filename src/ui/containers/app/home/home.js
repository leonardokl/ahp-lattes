import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import {withRouter} from 'react-router'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

import Sidebar from 'ui/components/sidebar'
import Alternatives from './alternatives'
import AddAlternatives from './add-alternatives'
import Results from './results'
import styles from './home.scss'

class App extends React.Component {
  componentWillMount() {
    this.props.onWillMount()
  }

  render() {
    const {alternatives} = this.props

    return (
      <div className={styles.container}>
        {!alternatives.data.length ?
          <AddAlternatives onClickAdicionar={this.props.onClickAdicionar}/> :
          [
            <Alternatives
              key={1}
              alternatives={alternatives.data}
              onClickRemoveAlternative={this.props.onClickRemoveAlternative}
              onClickAdicionar={this.props.onClickAdicionar}
            />,
          <Results key={2} data={this.props.results.data}/>
          ]
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  alternatives: state.alternatives,
  results: state.results
})

const mapDispatchToProps = (dispatch) => ({
  onWillMount: () => {
    dispatch(actions.initHomePage())
  },
  onClickRemoveAlternative: (index) => {
    dispatch(actions.removeAlternative(index))
  },
  onClickAdicionar: () => {
    dispatch(actions.setNewAlternativeShowModal(true))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
