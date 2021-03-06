import React, { Component } from 'react'

// Own utils
import { timeDateFormat } from '../../utils/date'

// Material ui styles component
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import classNames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  commentMsg: {

  },
  smallText: {
  	fontSize: '12px',
    color: theme.palette.primary.light
  },
  date: {
  	textAlign: 'right'
  },
  msg: {
  	marginLeft: '15px'
  }
})

class Comment extends Component {
  render() {
	  const comments = this.props.comments
	  const { classes } = this.props
  	if (comments) {
      return (
  		<div className={classes.commentMsg}>
  			{comments.map(comment =>
  				(<div key={ comment._id }>
  					<Divider />
  				  <p className={classes.smallText}>
  				    <b>From:</b> {comment.from}
  				  </p>
  				  <p className={classes.msg}>{comment.msg}</p>
  				  <p className={classNames(classes.smallText, classes.date)}>
                {timeDateFormat(comment.date) }
              </p>
  				  <Divider />
  				</div>
  				))}
  		</div>
  		)
    }
    return (
      <CircularProgress />
    )
  }
}


export default withStyles(styles)(Comment)
