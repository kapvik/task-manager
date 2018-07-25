import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { birthdayFormat } from '../../utils/date'

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
  render() {
    const { users } = this.props.users
    const { isEditing, editData } = this.props.isEdit
    const { classes } = this.props
    if (users && !isEditing && !editData) {
      return (
        <Fragment>
          <div className={classes.topListInfo}>
            <Typography variant='subheading'>
              <b className={classes.subTitle}>Name:</b> { users[0].firstname } { users[0].lastname }
            </Typography>
            <Typography variant='subheading'>
              <b className={classes.subTitle}>Email:</b> { users[0].email } </Typography>
            <Typography variant='subheading'>
              <b className={classes.subTitle}>Date of birth:</b> { birthdayFormat(users[0].dateOfBirth) }</Typography>
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
            {users[0].skills.split(',').map(skill =>
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
        </Fragment>
      )
    } else if (isEditing) {
      return (
        <Grid container spacing={16} justify='center'>
          <EditForm />
        </Grid>
      )
    } else if (editData) {
      return (
        <Fragment>
          <div className={classes.topListInfo}>
            <Typography variant='subheading'>
              <b className={classes.subTitle}>Name:</b> { editData.firstname || users[0].firstname } { editData.lastname || users[0].lastname }
            </Typography>
            <Typography variant='subheading'>
              <b className={classes.subTitle}>Email:</b> { editData.email || users[0].email }
            </Typography>
            <Typography variant='subheading'>
              <b className={classes.subTitle}>Registred since:</b> { editData.data || birthdayFormat(users[0].dateOfBirth) }
            </Typography>
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
            { editData.skills ? editData.skills.split(',').map(skill =>
              (<ListItem
                key={skill}
                button
                className={ classes.listSkillsItem }
              >
                <ListItemText primary={skill} />
              </ListItem>)
            ) : users[0].skills.split(',').map(skill =>
              (<ListItem key={skill} button>
                <ListItemText primary={skill} />
              </ListItem>)
            )}
          </List>
        </Fragment>
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
  isEdit: state.editing
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(User)
