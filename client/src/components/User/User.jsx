import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { birthdayFormat } from '../../utils/date'
import { fetchCurrentUser } from '../../actions'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import EditForm from './EditForm'

const styles = theme => ({
  listSkills: {
    display: 'flex',
    flexDirection: 'column'
  },
  listSkillsItem: {
    textAlign: 'center',
    paddingTop: 0
  },
  listTitle: {
    marginTop: '1em',
    fontSize: '1.5em',
    textTransform: 'uppercase'
  },
  topListInfo: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    margin: '30px auto'
  },
  subTitle: {
    color: theme.palette.primary.main
  }
})
class User extends Component {
  componentDidMount() {
    this.props.fetchProfile()
  }

  render() {
    const { currentUser, isEditing } = this.props.usersData
    const { classes } = this.props
    if (currentUser && !isEditing ) {
      return (
        <Fragment>
          <div className={classes.topListInfo}>
            <Typography variant='subheading'>
              <b className={classes.subTitle}>Name:</b> { currentUser.firstname } { currentUser.lastname }
            </Typography>
            <Typography variant='subheading'>
              <b className={classes.subTitle}>Email:</b> { currentUser.email } </Typography>
            <Typography variant='subheading'>
              <b className={classes.subTitle}>Date of birth:</b> { birthdayFormat(currentUser.dateOfBirth) }</Typography>
          </div>
          <Divider />
          <Typography
            variant='subheading'
            align='center'
            color='primary'
            className={classes.listTitle}
          >
            Skills
          </Typography>
          <List component='ul' className={ classes.listSkills }>
            {currentUser.skills.split(',').map(skill =>
              (<ListItem
                component='li'
                key={skill}
                button
                className={ classes.listSkillsItem }
              >
                <ListItemText component='span' primary={skill} />
              </ListItem>)
            )}
          </List>
          <Divider />
          <Typography
            variant='subheading'
            align='center'
            color='primary'
            className={classes.listTitle}
          >
            Tasks
          </Typography>
        </Fragment>
      )
    } else if (isEditing) {
      return (
        <Grid container spacing={16} justify='center'>
          <EditForm />
        </Grid>
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
  usersData: state.dataUser
})

const mapDispatchToProps = dispatch => ({
  fetchProfile: (email) => dispatch(fetchCurrentUser(email))
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(User)
