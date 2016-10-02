import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import {withRouter, Link} from 'react-router'
import NewAlternativeModal from './new-alternative-modal'
import Topbar from './topbar'
import Sidebar from 'ui/components/sidebar'
import styles from './app.scss'

class App extends React.Component {
  componentWillMount() {
    this.props.onWillMount()
  }

  getTopBarAction() {
    const {pathname} = this.props.location

    switch(pathname) {
    case 'home':
    case '/home':
      return {label:'Preferências', link: 'preferencias'}
    case 'preferencias':
    case '/preferencias':
    case 'criterios':
    case '/criterios':
      return {label: 'Voltar', link: 'home'}
    }
  }

  getTopBarTitle() {
    const {pathname} = this.props.location

    switch(pathname) {
    case 'home':
    case '/home':
      return 'Home'
    case 'preferencias':
    case '/preferencias':
      return 'Preferências'
    case 'criterios':
    case '/criterios':
      return 'Criterios'
    case 'sobre':
    case '/sobre':
      return 'Sobre'
    }
  }

  render() {console.log('STATE', this.props.state);
    return (
      <div>
        <Topbar
          action={this.getTopBarAction()}
          disablePreferences={!!(this.props.alternatives.data.length < 2)}
          title={this.getTopBarTitle()}
        />
        <div>
          <Sidebar
            items={this.props.criteria.data}
            onClickMenu={() => 1}
          />
          <div className={styles.childrenContainer}>
            {this.props.children}
          </div>
        </div>
        <NewAlternativeModal
          newAlternative={this.props.newAlternative}
          handleClose={this.props.onRequestCloseModal}
          onCreateAlternative={this.props.onCreateAlternative}
          criteria={this.props.criteria.data}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({state: state,
  alternatives: state.alternatives,
  criteria: state.criteria,
  newAlternative: state.newAlternative,
})

const mapDispatchToProps = (dispatch) => ({
  onCreateAlternative: (data) => {
    dispatch(actions.createAlternative(data))
  },
  onRequestCloseModal: () => {
    dispatch(actions.setNewAlternativeShowModal(false))
  },
  onWillMount: () => {
    dispatch(actions.fetchCriteria())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
