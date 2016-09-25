import React from 'react'
import {Link} from 'react-router'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/navigation/arrow-back'
import ActionSettings from 'material-ui/svg-icons/action/settings'

const getIcon = (link) => {
  switch (link) {
  case 'home':
    return (<HardwareKeyboardArrowLeft />)
  case 'preferencias':
    return (<ActionSettings />)
  }
}

const Topbar = (props) => (
  <AppBar
    title='Seleção'
    style={{position: 'fixed'}}
    showMenuIconButton={false}
    iconElementRight={
      (!props.disablePreferences || props.action.link == 'home') &&
      <Link to={props.action.link}>
        <RaisedButton
          icon={getIcon(props.action.link)}
          label={props.action.label}
          style={{marginTop: '4px'}}
        />
      </Link>
    }
  />
)

Topbar.propTypes = {
  items: React.PropTypes.array,
}

Topbar.defaultProps = {
  items: []
}

module.exports = Topbar
