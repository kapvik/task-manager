import React, { Component } from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { fetchData, selectedUser, openigDialog } from '../../actions'

import { withStyles } from '@material-ui/core/styles'

// Own components
import Chat from '../Chat'
import Loader from '../Loader/Loader'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import ChatIcon from '@material-ui/icons/Chat'
import IconButton from '@material-ui/core/IconButton'

const styles = () => ({
  user: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

class UserList extends Component {
  constructor(props) {
    super(props)

    this.onClickOpen = this.onClickOpen.bind(this)
    this.onClickUser = this.onClickUser.bind(this)
  }
  componentDidMount() {
    this.props.dataFetch()
  }

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
              key={user._id}
              onClick={ () => {
              	this.onClickUser(user._id)
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
              <IconButton color='primary'>
                <ChatIcon />
              </IconButton>
            </ListItem>
          ))}
          {open ? <Chat /> : null}
        </List>
      )
    }
    return (
      <div>
        <Loader />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.dataUser,
  chat: state.chatData
})

const mapDispatchToProps = dispatch => ({
  dataFetch: () => dispatch(fetchData()),
  select: (id) => dispatch(selectedUser(id)),
  open: () => dispatch(openigDialog())
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(UserList)
