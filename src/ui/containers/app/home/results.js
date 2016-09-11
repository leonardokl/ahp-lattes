import React from 'react';
import Paper from 'material-ui/Paper';

import Chart from 'ui/components/chart';
import styles from './results.scss';

const Results = (props) => {
  if (!props.results.length) {
    return (
      <Paper className={styles.container} zDepth={1}>
        <div className={styles.message}>Adicione mais uma alternativa para visualizar o resultado</div>
      </Paper >
    );
  }
  return (
    <Paper className={styles.container} style={{paddingBottom: 20}} zDepth={1}>
      <div className={styles.message}>
        {`${props.results[0].label} é a melhor escolha!`}
      </div>
      <Chart data={props.results}/>
    </Paper>
  );
};

Results.propTypes = {
  results: React.PropTypes.array,
};

Results.defaultProps = {
  results: []
};

module.exports = Results;
