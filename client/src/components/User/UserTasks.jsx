import React, { Component } from 'react'

// Own styles
import styles from './user.styles'

// Material ui components
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'

class UserTasks extends Component {
  render() {
    const { classes, tasks } = this.props
    return (
      <div>
        <Typography
          variant='subheading'
          align='left'
          color='primary'
          className={classes.listTitle}
        >
            Tasks
        </Typography>
        <List component='ul' className={ classes.listSkills }>
          {tasks.map(task =>
            (<ListItem
              component='li'
              dense
              key={task._id}
              className={ classes.listSkillsItem }
            >
              <Button
                component='button'
                className={classes.button}
                color='secondary'
              >
                {task.status}
              </Button>
              <ListItemText
                component='span'
                primary={task.title}
                secondary={task.short_description}
              />
            </ListItem>)
          )}
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(UserTasks)
