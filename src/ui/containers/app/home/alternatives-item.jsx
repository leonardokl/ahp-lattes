import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {ListItem} from 'material-ui/List'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import AccountIcon from 'material-ui/svg-icons/action/account-circle'
import Avatar from 'material-ui/Avatar'

const AlternativesItem = (props) => (
  <ListItem
    primaryText={props.label}
    leftAvatar={
      <AccountIcon style={{height: 40, width: 40}} color='grey'/>
    }
    rightIcon={<CloseIcon onClick={props.onClickRemove}/>}
  />
)

AlternativesItem.propTypes = {
  label: React.PropTypes.string,
  onClick: React.PropTypes.func,
}

AlternativesItem.defaultProps = {
  label: '--',
  onClick: () => 1
}

module.exports = AlternativesItem
