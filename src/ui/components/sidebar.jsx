import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Toggle from 'material-ui/Toggle'
import SidebarItem from './sidebar-item'
import styles from './sidebar.scss'

const Sidebar = (props) => (
  <Drawer containerStyle={{overflowX: 'hidden'}} width={200} open={true} >
    <AppBar
      style={{backgroundColor: 'white'}}
      title='AHP Lattes'
      titleStyle={{color: '#767676'}}
      showMenuIconButton={false}
    />
    <SidebarItem title="Home" link="home" onTouchTap={() => props.onClickMenu("home")}/>
    <SidebarItem title="Critérios" link="criterios" onTouchTap={() => props.onClickMenu("criterios")}/>
    <SidebarItem title="Preferências" link="preferencias" onTouchTap={() => props.onClickMenu("criterios")}/>
  </Drawer>
)

module.exports = Sidebar
