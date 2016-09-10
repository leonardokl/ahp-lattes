import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const Topbar = (props) => (
  <AppBar
    title='Seleção'
    style={{position: 'fixed'}}
    showMenuIconButton={false}
    iconElementRight={
      <Link to={props.action.link}>
        <RaisedButton style={{marginTop: '4px'}} label={props.action.label} />
      </Link>
    }
  />
);

Topbar.propTypes = {
  items: React.PropTypes.array,
};

Topbar.defaultProps = {
  items: []
};

module.exports = Topbar;
