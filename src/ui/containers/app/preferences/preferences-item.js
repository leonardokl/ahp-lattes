import React from 'react';
import Paper from 'material-ui/Paper';
import Table from 'ui/components/table';
import styles from './preferences-item.scss';

const PreferencesItem = (props) => (
  <Paper className={styles.paper} zDepth={1} rounded={false}>
    <Table />
  </Paper>
);

PreferencesItem.propTypes = {
  items: React.PropTypes.array,
};

PreferencesItem.defaultProps = {
  items: []
};

module.exports = PreferencesItem;
