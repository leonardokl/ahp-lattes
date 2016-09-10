import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Sidebar = (props) => (
  <Drawer containerStyle={{overflowX: 'hidden'}} width={200} open={true} >
    <AppBar title='Critérios' showMenuIconButton={false}/>
    {props.items.map(item =>
      <MenuItem>{item.name}</MenuItem>
    )}
  </Drawer>
);

Sidebar.propTypes = {
  items: React.PropTypes.array,
};

Sidebar.defaultProps = {
  items: []
};

module.exports = Sidebar;
