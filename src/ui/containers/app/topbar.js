import React from 'react'
import {Link} from 'react-router'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/navigation/arrow-back'
import ActionSettings from 'material-ui/svg-icons/action/settings'

const getIcon = (props) => {
  if (props.title !== 'Home')
    return (
      <Link to='home' >
        <RaisedButton
          label='Ver resultado'
        />
      </Link>
    )
}

const getTitle = (link) => {
  switch (link) {
  case 'home':
    return 'Preferências'
  case 'preferencias':
    return 'Home'
  }
}

const Topbar = (props) => (
  <AppBar
    title={props.title}
    titleStyle={{paddingLeft: 215}}
    style={{position: 'fixed'}}
    showMenuIconButton={false}
    iconElementRight={getIcon(props)}
    iconStyleRight={{display: 'flex', alignItems: 'center', marginTop: 0, }}
  />
)

Topbar.propTypes = {
  items: React.PropTypes.array,
}

Topbar.defaultProps = {
  items: []
}

module.exports = Topbar
