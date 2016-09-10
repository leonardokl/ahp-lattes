import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import styles from './add-alternatives.scss';

const Results = (props) => (
  <Paper className={styles.container} zDepth={2} rounded={false}>
    <div className={styles.content}>
      <div className={styles.message}>Comece a adicionar alternativas para gerar as comparações</div>
      <RaisedButton
        icon={<ContentAdd />}
        primary
        label='Adicionar'
        style={{marginTop: '4px'}}
        onClick={props.onClickAdicionar}
      />
    </div>
  </Paper >
);

Results.propTypes = {
  onClickAdicionar: React.PropTypes.func,
};

Results.defaultProps = {
  onClickAdicionar: () => 1
};

module.exports = Results;
