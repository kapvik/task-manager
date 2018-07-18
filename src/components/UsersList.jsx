import React, { Component } from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { selectedUser, openigDialog } from '../actions'

import { withStyles } from '@material-ui/core/styles'

import Chat from './Chat'
import CircularProgress from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import ChatIcon from '@material-ui/icons/Chat'
import ListItemIcon from '@material-ui/core/ListItemIcon'

const styles = () => ({
  user: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

class UserList extends Component {
  onClickOpen() {
    this.props.open()
  }

  onClickUser(id) {
    this.props.select(id)
  }

  render() {
  	const { users } = this.props.users
  	const { open } = this.props.chat
  	const { classes } = this.props

  	if (users) {
      return (
        <List
          component='ul'
        >
          { users.map(user => (
            <ListItem
              button
              key={user.user_id}
              onClick={ () => {
              	this.onClickUser(user.user_id)
                this.onClickOpen()
              }}
              className={classes.user}
            >
              <Typography
                variant='body1'
                align='left'
              >
                {user.firstname} {user.lastname}
              </Typography>
              <ListItemIcon >
                <ChatIcon />
              </ListItemIcon>
            </ListItem>
          ))}
          {open ? <Chat /> : null}
        </List>
      )
    }
    return (
      <div>
        <CircularProgress />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.dataUser,
  chat: state.chatData
})

const mapDispatchToProps = dispatch => ({
  select: (id) => dispatch(selectedUser(id)),
  open: () => dispatch(openigDialog())
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(UserList)
