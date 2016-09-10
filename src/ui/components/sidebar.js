import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import styles from './sidebar.scss';

// const styles = {
//   block: {
//     maxWidth: 250,
//   },
//   toggle: {
//     marginBottom: 16,
//   },
// };

const Sidebar = (props) => (
  <Drawer containerStyle={{overflowX: 'hidden'}} width={200} open={true} >
    <AppBar title='Critérios' showMenuIconButton={false}/>
    <div className={styles.togglesContainer}>
      <Toggle
        label='Todos'
        defaultToggled
        labelPosition="right"
        className={styles.toggle}
        labelStyle={{color: 'rgb(117, 117, 117)'}}
      />
      {props.items.map((item, index) =>
        <Toggle
          label={item.name}
          labelPosition="right"
          className={styles.toggle}
          labelStyle={{color: 'rgb(117, 117, 117)'}}
        />
      )}
    </div>
  </Drawer>
);

Sidebar.propTypes = {
  items: React.PropTypes.array,
};

Sidebar.defaultProps = {
  items: []
};
//<MenuItem key={index}>{item.name}</MenuItem>
module.exports = Sidebar;
