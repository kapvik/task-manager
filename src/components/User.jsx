import React, { Component } from 'react'

import { connect } from 'react-redux'
import { startEditingUser } from '../actions'
import compose from 'recompose/compose'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

import EditForm from './EditForm'

const styles = () => ({
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
  }
})
class User extends Component {
  onClickEdit() {
    this.props.editProfile()
  }


  render() {
    const { users } = this.props.users
    const { isEditing, editData } = this.props.isEdit
    const { classes } = this.props
    if (users && !isEditing && !editData) {
      return (
        <Grid item xs={12} >
          <div key={ users[0].id }>
            <IconButton aria-label='Delete' onClick={ () => this.onClickEdit() }>
              <EditIcon />
            </IconButton>
            <Typography variant='subheading'>
              { users[0].firstname } { users[0].lastname }
            </Typography>
            <Typography variant='subheading'> { users[0].email } </Typography>
            <Typography variant='subheading'> { users[0].dob }</Typography>
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
          </div>
        </Grid>

      )
    } else if (isEditing) {
      return (
        <Grid container spacing={16} justify='center'>
          <EditForm />
        </Grid>
      )
    } else if (editData) {
      return (
        <Grid item xs={12} >
          <div key={ users[0].id }>
            <IconButton aria-label='Delete' onClick={ () => this.onClickEdit() }>
              <EditIcon />
            </IconButton>
            <Typography variant='subheading'>
              { editData.firstname || users[0].firstname } { editData.lastname || users[0].lastname }
            </Typography>
            <Typography variant='subheading'>
              { editData.email || users[0].email }
            </Typography>
            <Typography variant='subheading'>
              { editData.data || users[0].dob }
            </Typography>
            <Divider />
            <Typography
              variant='subheading'
              align='center'
            >
            Skills
            </Typography>
            <List component='nav'>
              { editData.skills ? editData.skills.split(',').map(skill =>
                (<ListItem key={skill} button>
                  <ListItemText primary={skill} />
                </ListItem>)
              ) : users[0].skills.split(',').map(skill =>
                (<ListItem key={skill} button>
                  <ListItemText primary={skill} />
                </ListItem>)
              )}
            </List>
          </div>
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
  users: state.dataUser,
  isEdit: state.editing
})

const mapDispatchToProps = dispatch => ({
  editProfile: () => dispatch(startEditingUser())
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(User)
