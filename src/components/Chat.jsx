import React, { Component } from 'react'

import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { closingDialog, fetchMessages, sendingMessage } from '../actions'

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'
import CancelIcon from '@material-ui/icons/Cancel'
import SendIcon from '@material-ui/icons/Send'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    float: 'right'
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
  	margin: '0 60px 10px 0',
  	padding: '5px',
  	backgroundColor: '#3f51b5'
  },
  messageLeft: {
  	textAlign: 'left',
  	color: '#fff'
  },
  messageBoxRight: {
  	margin: '0 0 auto 10px',
  	padding: '5px',
  	marginLeft: '60px'
  },
  messageRight: {
  	textAlign: 'right',
  	color: '#3f51b5'
  },
  inputWrite: {
  	padding: '24px 30px'
  }
})

class Chat extends Component {
  componentDidMount() {
    this.props.previousMsg()
  }
  onClose() {
    this.props.close()
  }

  renderField({ input, label, type }) {
    return (
      <FormControl >
        <InputLabel>{label}</InputLabel>
        <Input
          margin='dense'
          fullWidth
          multiline
          {...input} type={type}
        />
      </FormControl>)
  }

  render() {
    const { classes, handleSubmit } = this.props
    const { open, msg, msgTo } = this.props.chat
    if (open) {
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
          <DialogContent>
            {msg ? (<div>
              { msg.receive.map(recMsg => (
                <Paper key={recMsg.date.day} className={classes.messageBoxLeft}>
                  <DialogContentText className={classes.messageLeft}>
                    {recMsg.msg}
                  </DialogContentText>
                </Paper>))}
            </div>) : null }
            {msgTo ? (
              <Paper className={classes.messageBoxRight}>
                <DialogContentText className={classes.messageRight}>
                  {msgTo.msg}
                </DialogContentText>
              </Paper>) : null }
          </DialogContent>
          <form
            className={classes.inputWrite}
            onSubmit={handleSubmit(this.props.send, this.props.reset)}
          >
            <Field
              label='Write a message...'
              name='msg'
              component={this.renderField}
              type='text'
            />
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              size='small'
              type='submit'
            >
                    Send
              <SendIcon
                className={classNames(classes.rightIcon, classes.iconSmall)}
              />
            </Button>
          </form>
        </Dialog>)
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
  close: () => dispatch(closingDialog()),
  previousMsg: () => dispatch(fetchMessages()),
  send: (msg) => dispatch(sendingMessage(msg))
})
export default compose(
  withStyles(styles),
  reduxForm({
    form: 'sendMsg'
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(Chat)
