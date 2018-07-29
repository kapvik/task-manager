import React, { Component } from 'react'

// Own components
import UserTasks from './UserTasks'
import UserSkills from './UserSkills'
import EditForm from './EditForm'
import User from './UserPersonalInfo'
import Loader from '../Loader/Loader'

// Actions
import {
  startEditingUser,
  fetchCurrentUser,
  changingTaskStatus
} from '../../actions'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { Link } from 'react-router-dom'

// Own styles
import styles from './user.styles'

// Material ui components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import HomeIcon from '@material-ui/icons/Home'
import { withStyles } from '@material-ui/core/styles'


class ProfilePage extends Component {
  componentDidMount() {
    this.props.fetchProfile()
  }
  constructor(props) {
    super(props)

    this.onClickEdit = this.onClickEdit.bind(this)
  }
  onClickEdit() {
    this.props.editProfile()
  }

  onChangeStatus(task_id) {
    this.props.changeStatus(task_id)
  }

  render() {
    const { classes } = this.props
    const { currentUser, isEditing } = this.props.usersData
    if (currentUser && !isEditing) {
      return (
        <Grid container >
          <Grid item xs={12}>
            <AppBar position='sticky'>
              <Toolbar variant='dense'>
                <Typography variant='title' color='inherit'>
                  Personal Task Manager
                </Typography>
                <IconButton aria-label='Edit' onClick={ this.onClickEdit } className={classes.editBtn}>
                  <EditIcon />
                </IconButton>
                <Link
                  to='/'
                  className={classes.btnLink}
                >
                  <IconButton aria-label='Home' className={classes.homeBtn}>
                    <HomeIcon />
                  </IconButton>
                </Link>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12} >
            <User currentUser={currentUser} />
            <div className={classes.userInfoBlock}>
              <UserSkills skills={currentUser.skills} />
              <UserTasks
                tasks={currentUser.tasks}
              />
            </div>
          </Grid>
        </Grid>
      )
    } else if (isEditing) {
      return (
        <Grid container spacing={16} justify='center'>
          <EditForm/>
        </Grid>
      )
    }
    return (
      <Loader />
    )
  }
}
const mapStateToProps = state => ({
  usersData: state.dataUser,
  showTaskForm: state.tasksData.showTaskForm
})

const mapDispatchToProps = dispatch => ({
  editProfile: () => dispatch(startEditingUser()),
  fetchProfile: (email) => dispatch(fetchCurrentUser(email)),
  changeStatus: (task_id) => dispatch(changingTaskStatus(task_id))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(ProfilePage)
