import React, { Component } from 'react'

import { connect } from 'react-redux'
import { startEditingUser } from '../actions'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import CircularProgress from '@material-ui/core/CircularProgress'

import EditForm from './EditForm'

class User extends Component {
  onClickEdit() {
    this.props.editProfile()
  }


  render() {
    const { user } = this.props.user
    const { isEditing, editData } = this.props.isEdit
    if (user && !isEditing && !editData) {
      return (
        <Grid item xs={12} >
          <div key={ user[0].id }>
            <IconButton aria-label='Delete' onClick={ () => this.onClickEdit() }>
              <EditIcon />
            </IconButton>
            <Typography variant='subheading'>
              { user[0].firstname } { user[0].lastname }
            </Typography>
            <Typography variant='subheading'> { user[0].email } </Typography>
            <Typography variant='subheading'> { user[0].dob }</Typography>
            <Divider />
            <Typography variant='subheading' align='center'>Skills </Typography>
            <List component='nav'>
              {user[0].skills.split(',').map(skill =>
                (<ListItem key={skill} button>
                  <ListItemText primary={skill} />
                </ListItem>)
              )}
            </List>
          </div>
        </Grid>

      )
    } else if (isEditing) {
      return (
        <EditForm />
      )
    } else if (editData) {
      return (
        <Grid item xs={12} >
          <div key={ user[0].id }>
            <IconButton aria-label='Delete' onClick={ () => this.onClickEdit() }>
              <EditIcon />
            </IconButton>
            <Typography variant='subheading'>
              { editData.first || user[0].firstname } { editData.last || user[0].lastname }
            </Typography>
            <Typography variant='subheading'> { editData.email || user[0].email } </Typography>
            <Typography variant='subheading'> { editData.data || user[0].dob }</Typography>
            <Divider />
            <Typography variant='subheading' align='center'>Skills </Typography>
            <List component='nav'>
              { editData.skills ? editData.skills.split(',').map(skill =>
                (<ListItem key={skill} button>
                  <ListItemText primary={skill} />
                </ListItem>)
              ) : user[0].skills.split(',').map(skill =>
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
  user: state.dataUser,
  isEdit: state.editing
})

const mapDispatchToProps = dispatch => ({
  editProfile: () => dispatch(startEditingUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
