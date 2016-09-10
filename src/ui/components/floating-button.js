import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const FloatingButton = (props) => (
  <FloatingActionButton
    mini
    style={{display: 'flex', float: 'right', marginRight: 12}}
    zDepth={1}
    onClick={props.onClick}
  >
    <ContentAdd />
  </FloatingActionButton>
);

FloatingButton.propTypes = {
  onClick: React.PropTypes.func,
};

FloatingButton.defaultProps = {
  onClick: () => 1
};

module.exports = FloatingButton;
