import React from 'react';
import Paper from 'material-ui/Paper';
import Table from 'ui/components/table';
import styles from './preferences-item.scss';

const PreferencesItem = (props) => (
  <Paper className={styles.paper} zDepth={2} rounded={false}>
    <Table
      alternatives={props.alternatives}
      title={props.preference.name}
      preference={props.preference}
      preferenceIndex={props.preferenceIndex}
      onChangeSelect={props.onChangePreferenceValue}
    />
  </Paper>
);

PreferencesItem.propTypes = {
  items: React.PropTypes.array,
  onChangeSelect: React.PropTypes.func
};

PreferencesItem.defaultProps = {
  items: []
};

module.exports = PreferencesItem;
