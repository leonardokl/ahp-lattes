import React from 'react'
import Paper from 'material-ui/Paper'

import Chart from 'ui/components/chart'
import styles from './results.scss'

const Results = (props) => {
  const sortByDescValue = (array) => {
    return array.sort((a, b) => {
      if (a.value < b.value) {
        return 1
      }

      if (a.value > b.value) {
        return -1
      }

      return 0
    })
  }

  const getMessage = () => {

    const results = sortByDescValue(props.data)

    if (results[0].value === results[1].value) {
      return 'Importâncias iguais'
    }

    return `${results[0].label} é a melhor escolha!`
  }

  if (!props.data.length) {
    return (
      <Paper className={styles.container} zDepth={1}>
        <div className={styles.message}>Adicione mais uma alternativa para visualizar o resultado</div>
      </Paper >
    )
  }

  return (
    <Paper className={styles.container} style={{paddingBottom: 20}} zDepth={1}>
      <div className={styles.message}>
        {getMessage()}
      </div>
      <Chart data={props.data}/>
    </Paper>
  )
}

Results.propTypes = {
  data: React.PropTypes.array,
}

Results.defaultProps = {
  data: []
}

module.exports = Results
