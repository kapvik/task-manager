import React from 'react'

// Own styles
import styles from './loader.styles'

import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

const Loader = ({ classes }) => <CircularProgress className={classes.loader} />

export default withStyles(styles)(Loader)
