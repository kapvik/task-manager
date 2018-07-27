import React, { Component } from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { Field, reduxForm } from 'redux-form'

import Comment from './Comment'
import Attachments from './Attachments'
import TaskForm from './TaskForm'

import { addedComment, fetchComments, startingEditTask } from '../../actions'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import DownIcon from '@material-ui/icons/KeyboardArrowDown'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Collapse from '@material-ui/core/Collapse'
import Switch from '@material-ui/core/Switch'
import EditIcon from '@material-ui/icons/Edit'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  },
  paper: {
  	...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  comments: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  button: {
    margin: theme.spacing.unit
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  relative: {
  	position: 'relative'
  },
  commentTitle: {
    textAlign: 'center',
    color: theme.palette.primary.main
  },
  status: {
    color: theme.palette.primary.main,
    fontWeight: 700
  },
  attachments: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  editBtn: {
    color: '#fff',
    position: 'absolute',
    right: '1%',
    top: 0
  }
})

class TaskInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      checked: false
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onClickEditTask = this.onClickEditTask.bind(this)
  }

  componentDidMount() {
    this.props.commentFetch()
  }
  renderField({ input, label, type }) {
    return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Input
          {...input} type={type}
          multiline
        />
      </FormControl>)
  }

  handleClickOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  handleChange() {
    this.setState(state => ({ checked: !state.checked }))
  }
  changeStatus(e) {
    this.setState({ status: e.target.value })
  }

  onClickEditTask() {
    this.props.startEditTask()
  }
  render() {
  	const { currentTaskInfo, comment, currentTask, showTaskForm } = this.props.task
  	const { classes, handleSubmit, submitting, pristine } = this.props
    if (currentTaskInfo && !showTaskForm) {
      return (
        <div className={classes.root}>
          <AppBar position='sticky'>
            <Toolbar variant='dense'>
              <Typography variant='title' color='inherit'>
                Task Details
              </Typography>
              <IconButton
                aria-label='Delete'
                onClick={ this.onClickEditTask }
                className={classes.editBtn}
              >
                <EditIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Paper className={classes.paper} elevation={1}>
            <Typography variant='headline' component='h3'>
              { currentTaskInfo.title }
            </Typography>
            <Typography component='p'>
              {currentTaskInfo.full_description}
            </Typography>
          </Paper>
          <Paper className={classNames(classes.paper, classes.attachments)} elevation={1}>
            <div>
              <Typography variant='headline' component='h3'>
                Performer
              </Typography>
              <p> {currentTaskInfo.performer.username} </p>
            </div>
            <div>
              <Typography variant='headline' component='h3'>
                Status
              </Typography>
              <Select
                value={currentTaskInfo.status}
                onChange={this.changeStatus}
              >
                <MenuItem value='To Do'>To Do</MenuItem>
                <MenuItem value='In Progress'>In Progress</MenuItem>
                <MenuItem value='Peer Review'>Peer Review</MenuItem>
                <MenuItem value='Done'>Done</MenuItem>
              </Select>
            </div>
            <Attachments />
          </Paper>
          <Paper className={classes.paper} elevation={1}>
            <Typography
              variant='headline'
              component='h3'
              className={classes.relative}>
              <Button
                mini
                variant='fab'
                color='primary'
                aria-label='Add'
                className={classes.button}
                onClick={this.handleClickOpen}
              >
                <AddIcon />
              </Button>
              Comments
              <Switch
                variant='fab'
                className={classes.fab}
                onChange={this.handleChange}
                checked={this.state.checked}
                color='primary'
              >
                <DownIcon />
              </Switch>
            </Typography>
            <Collapse in={this.state.checked}>
              <Paper elevation={4} className={classes.paper}>
                { comment ? <Comment /> : <p className={classes.commentTitle}>No comments to show</p>}
              </Paper>
            </Collapse>
          </Paper>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby='form-dialog-title'
          >
            <DialogTitle id='form-dialog-title'>Add Comment</DialogTitle>
            <form onSubmit={handleSubmit(this.props.addComment(currentTask))}>
              <DialogContent>
                <Field
                  label='Full Name'
                  name='from'
                  component={this.renderField}
                  type='text'
                />
                <Field
                  label='Comment...'
                  name='msg'
                  component={this.renderField}
                  type='textarea'
                />
              </DialogContent>
              <DialogActions>
                <Button
                  type='button'
                  onClick={this.handleClose}
                  color='primary'>
              Cancel
                </Button>
                <Button
                  type='submit'
                  onClick={this.handleClose}
                  disabled={pristine || submitting }
                  color='primary'>
              Add comment
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </div>)
    } else if (showTaskForm) {
      return (
        <Grid container spacing={16} justify='center'>
          <TaskForm />
        </Grid>
      )
    }
    return (
      <CircularProgress />
    )
  }
}

const mapStateToProps = state => ({
  task: state.tasksData
})

const mapDispatchToProps = dispatch => ({
  addComment: (comment, task_id) => dispatch(addedComment(comment, task_id)),
  commentFetch: () => dispatch(fetchComments()),
  startEditTask: () => dispatch(startingEditTask())
})


export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'comments',
    onSubmitSuccess: (result, dispatch, props) => {
      props.reset('sendMsg')
    }
  })
)(TaskInfo)
