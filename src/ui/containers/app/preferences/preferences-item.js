import React from 'react';
import Paper from 'material-ui/Paper';
import Table from 'ui/components/table';
import styles from './preferences-item.scss';

const PreferencesItem = (props) => (
  <Paper className={styles.paper} zDepth={2} rounded={false}>
    <Table title={props.preference.name} alternatives={props.alternatives}/>
  </Paper>
);

PreferencesItem.propTypes = {
  items: React.PropTypes.array,
};

PreferencesItem.defaultProps = {
  items: []
};

module.exports = PreferencesItem;
