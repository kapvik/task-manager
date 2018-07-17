import React, { Component } from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CircularProgress from '@material-ui/core/CircularProgress'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import DownIcon from '@material-ui/icons/KeyboardArrowDown'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

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
  }
})

class TaskInfo extends Component {
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
  	const taskInfo = this.props.task
  	const { classes } = this.props
    if (taskInfo) {
      return (
        <div className={classes.root}>
          <AppBar position='sticky'>
            <Toolbar variant='dense'>
              <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
                <MenuIcon />
              </IconButton>
              <Typography variant='title' color='inherit'>
                Task Details
              </Typography>
            </Toolbar>
          </AppBar>
          <Paper className={classes.paper} elevation={1}>
            <Typography variant='headline' component='h3'>
              { taskInfo.title }
            </Typography>
            <Typography component='p'>
              {taskInfo.full_description}
            </Typography>
          </Paper>
          <Paper className={classes.paper} elevation={1}>
            <Typography variant='headline' component='h3'>
              Status
            </Typography>
            <Select
              value={taskInfo.status}
            >
              <MenuItem value='To Do'>To Do</MenuItem>
              <MenuItem value='In Progress'>In Progress</MenuItem>
              <MenuItem value='Peer Review'>Peer Review</MenuItem>
              <MenuItem value='Done'>Done</MenuItem>
            </Select>
          </Paper>
          <Paper className={classes.paper} elevation={1}>
            <Typography variant='headline' component='h3' className={classes.relative}>
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
              <Button variant='fab' mini className={classes.fab}>
                <DownIcon />
              </Button>
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
            </Typography>
          </Paper>
        </div>)
    }
    return (
      <div>
        <CircularProgress />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  task: state.tasksData.currentTaskInfo
})


export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(TaskInfo)
