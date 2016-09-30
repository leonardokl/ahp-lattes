import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import {Link} from 'react-router'

const SidebarItem = (props) => (
  <MenuItem
    style={{fontSize: 14, color: 'rgba(60, 60, 60, 0.870588)'}}
    onTouchTap={props.onTouchTap}
  >
    <strong>{props.title}</strong>
  </MenuItem>
)

module.exports = SidebarItem
