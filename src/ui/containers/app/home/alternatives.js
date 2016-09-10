import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import AlternativesItem from './alternatives-item';
import FloatingButton from 'ui/components/floating-button';

const Alternatives = (props) => (
  <Paper style={{width: '100%', maxWidth: 400}} zDepth={1}>
    <List>
      <div>
        <Subheader>Alternativas
          <FloatingButton />
        </Subheader>
      </div>
      {props.alternatives.map((item, index) =>
        <AlternativesItem key={index}/>
      )}
    </List>
  </Paper>
);

Alternatives.propTypes = {
  alternatives: React.PropTypes.array,
};

Alternatives.defaultProps = {
  alternatives: [1, 2, 3]
};

module.exports = Alternatives;
