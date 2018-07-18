import React, { Component } from 'react'

import compose from 'recompose/compose'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import ChatIcon from '@material-ui/icons/Chat'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const styles = () => ({
  user: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

class UserList extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
  }

  handleClickOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {
  	const { users } = this.props.users
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
              className={classes.user}
              onClick={this.handleClickOpen}
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
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby='form-dialog-title'
              >
                <DialogTitle id='form-dialog-title'>Add Comment</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Full Name'
                    type='name'
                    fullWidth
                  />
                  <TextField
                    margin='dense'
                    id='comment'
                    label='Comment...'
                    type='textarea'
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color='primary'>
              Cancel
                  </Button>
                  <Button onClick={this.handleClose} color='primary'>
              Add comment
                  </Button>
                </DialogActions>
              </Dialog>
            </ListItem>
          ))}
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
  users: state.dataUser
})
export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(UserList)
