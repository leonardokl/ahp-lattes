import React from 'react'

const PreferenceTitle = (props) => (
  <div style={{
    paddingLeft: 40,
    marginTop: 20,
    marginBottom: '-10px',
    color: '#5A5A5A',
    fontSize: 20
  }}>
    {props.name}
  </div>
)

module.exports = PreferenceTitle
