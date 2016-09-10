import React from 'react';
import Paper from 'material-ui/Paper';
import styles from './results.scss';

const Results = (props) => {
  if (!props.results.length) {
    return (
      <Paper className={styles.container} zDepth={1} rounded={false}>
        <div className={styles.noResults}>Adicione mais alternativas para visualizar o resultado</div>
      </Paper >
    );
  }
  return (
    <Paper className={styles.container} zDepth={1} rounded={false}>
      Resultado
    </Paper>
  )
};

Results.propTypes = {
  results: React.PropTypes.array,
};

Results.defaultProps = {
  results: []
};

module.exports = Results;
