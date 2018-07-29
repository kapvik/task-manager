import React, { Component } from 'react'

// Own styles
import styles from './user.styles'

// Material ui components
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class UserSkills extends Component {
  render() {
    const { classes, skills } = this.props
    return (
      <div>
        <Typography
          variant='subheading'
          align='left'
          color='primary'
          className={classes.listTitle}
        >
            Skills
        </Typography>
        <List component='ul' className={ classes.listSkills }>
          {skills.split(',').map(skill =>
            (<ListItem
              component='li'
              key={skill}
              className={ classes.listSkillsItem }
            >
              <ListItemText component='span' primary={skill} />
            </ListItem>)
          )}
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(UserSkills)
