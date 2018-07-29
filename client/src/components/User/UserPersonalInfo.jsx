import React, { Component, Fragment } from 'react'

// Own utils
import { birthdayFormat } from '../../utils/date'

// Own styles
import styles from './user.styles'

// Material ui components
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'

class User extends Component {
  render() {
    const { classes, currentUser } = this.props
    return (
      <Fragment>
        <div className={classes.topListInfo}>
          <Typography variant='subheading'>
            <b className={classes.subTitle}>Name:</b> { currentUser.firstname } { currentUser.lastname }
          </Typography>
          <Typography variant='subheading'>
            <b className={classes.subTitle}>Email:</b> { currentUser.email } </Typography>
          <Typography variant='subheading'>
            <b className={classes.subTitle}>Date of birth:</b> { currentUser.dateOfBirth ? birthdayFormat(currentUser.dateOfBirth) : 'Date is not provided' }</Typography>
        </div>
        <Divider />
      </Fragment>
    )
  }
}


export default withStyles(styles)(User)
