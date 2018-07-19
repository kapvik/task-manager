import React, { Component } from 'react'

import compose from 'recompose/compose'
import { connect } from 'react-redux'

import { closingDialog } from '../actions'

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CancelIcon from '@material-ui/icons/Cancel'
import SendIcon from '@material-ui/icons/Send'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  user: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  canselBtn: {
  	position: 'absolute',
    top: theme.spacing.unit * 2,
    right: 0
  },
  messageBoxLeft: {
  	margin: '0 auto 10px 10px',
  	padding: '5px',
  	backgroundColor: '#3f51b5'
  },
  messageLeft: {
  	textAlign: 'left',
  	color: '#fff'
  },
  messageBoxRight: {
  	margin: '0 10px auto 10px',
  	padding: '5px',
  	marginLeft: 'auto'
  },
  messageRight: {
  	textAlign: 'right',
  	color: '#3f51b5'
  },
  inputWrite: {
  	paddingTop: '24px',
  	paddingBottom: 0
  }
})

class Chat extends Component {
  onClose() {
    this.props.close()
  }
  render() {
    const { classes } = this.props
    const { open } = this.props.chat
    return (
      <Dialog
        open={open}
        maxWidth='xs'
        onClose={ () => this.onClose()}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle
          id='form-dialog-title'
          className={classes.user}
        >
        Chat
          <Button
            onClick={ () => this.onClose()}
            color='primary'
            className={classes.canselBtn}
          >
            <CancelIcon />
          </Button>
        </DialogTitle>
        <Paper className={classes.messageBoxLeft}>
          <DialogContentText className={classes.messageLeft}>
                    Text Message
          </DialogContentText>
        </Paper>
        <Paper className={classes.messageBoxRight}>
          <DialogContentText className={classes.messageRight}>
                    Another Message
          </DialogContentText>
        </Paper>
        <DialogContent className={classes.inputWrite}>
          <TextField
            margin='dense'
            id='message'
            label='Write a message...'
            type='textarea'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            size='small'
          >
                    Send
            <SendIcon
              className={classNames(classes.rightIcon, classes.iconSmall)}
            />
          </Button>
        </DialogActions>
      </Dialog>)
  }
}

const mapStateToProps = state => ({
  users: state.dataUser,
  chat: state.chatData
})

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(closingDialog())
})
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Chat)
