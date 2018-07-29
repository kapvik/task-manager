import React, { Component } from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import classNames from 'classnames'

// Own component
import Comment from '../Comments/Comment'
import CommentAddForm from '../Comments/CommentAddForm'
import Attachments from './Attachments'
import TaskForm from './TaskForm'
import DeleteModal from './DeleteModal'
import Loader from '../Loader/Loader'

// Actions
import {
  addedComment,
  startingEditTask,
  startingDeleteTask
} from '../../actions'

// Material ui styles component
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import DownIcon from '@material-ui/icons/KeyboardArrowDown'
import Collapse from '@material-ui/core/Collapse'
import Switch from '@material-ui/core/Switch'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

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
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  btn: {
    color: '#fff'
  },
  taskHeader: {
    display: 'flex',
    justifyContent: 'space-between'
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
  	const { currentTaskInfo, showTaskForm, deleteModalShow } = this.props.task
  	const { classes } = this.props
    if (currentTaskInfo) {
      return (
        <div className={classes.root}>
          <AppBar position='sticky'>
            <Toolbar variant='dense' className={classes.taskHeader}>
              <Typography variant='title' color='inherit'>
                Task Details
              </Typography>
              <div className={classes.btnGroup}>
                <IconButton
                  aria-label='Edit'
                  onClick={ this.onClickEditTask }
                  className={classes.btn}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label='Delete'
                  onClick={ () => this.props.show() }
                  className={classes.btn}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
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
              <p> { currentTaskInfo.performer || 'Free' } </p>
            </div>
            <div>
              <Typography variant='headline' component='h3'>
                Status
              </Typography>
              <Select
                value={currentTaskInfo.status || ' ' }
                onChange={this.changeStatus}
              >
                <MenuItem value='To Do'>To Do</MenuItem>
                <MenuItem value='In Progress'>In Progress</MenuItem>
                <MenuItem value='Peer Review'>Peer Review</MenuItem>
                <MenuItem value='Done'>Done</MenuItem>
              </Select>
            </div>
          </Paper>
          <Paper className={classes.paper} elevation={1}>
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
                { (currentTaskInfo.comments && currentTaskInfo.comments.length > 0)
                  ? <Comment comments={ currentTaskInfo.comments }/>
                  : <p className={classes.commentTitle}>No comments to show</p>
                }
      <Loader />
              </Paper>
            </Collapse>
          </Paper>
          <CommentAddForm
            open={this.state.open}
            close={this.handleClose}
            addComment={this.props.addComment}
            initialValues={currentTaskInfo}
          />
          { deleteModalShow && <DeleteModal/> }
          <TaskForm open={ showTaskForm }/>
        </div>)
    }
    return (
    )
  }
}

const mapStateToProps = state => ({
  task: state.tasksData
})

const mapDispatchToProps = dispatch => ({
  addComment: (comment) => dispatch(addedComment(comment)),
  startEditTask: () => dispatch(startingEditTask()),
  show: () => dispatch(startingDeleteTask())
})


export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(TaskInfo)
