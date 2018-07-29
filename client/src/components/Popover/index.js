import React from 'react'

// Own styles
import styles from './popover.styles'

// Material ui styles component
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const CustomPopover = ({ text, anchorExit, show, classes, close }) => {
  return (
    <Popover
      className={classes.popover}
      classes={{
        paper: classes.paper
      }}
      open={show}
      anchorEl={anchorExit}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      onClose={close}
      disableRestoreFocus
    >
      <Typography>{text}</Typography>
    </Popover>)
}

export default withStyles(styles)(CustomPopover)
