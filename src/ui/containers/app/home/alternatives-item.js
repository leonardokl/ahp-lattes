import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {ListItem} from 'material-ui/List'
import CommunicationChatBubble from 'material-ui/svg-icons/navigation/close'
import Avatar from 'material-ui/Avatar'

const AlternativesItem = (props) => (
  <ListItem
    primaryText={props.label}
    leftAvatar={<Avatar src="http://semantic-ui.com/images/avatar2/small/eve.png" />}
    rightIcon={<CommunicationChatBubble onClick={props.onClickRemove}/>}
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
