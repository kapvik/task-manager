import React, { Component } from 'react'

import compose from 'recompose/compose'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import classNames from 'classnames'

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
  	return (
  		<div className={classes.commentMsg}>
  			{comments.map(comment =>
  				(<div key={ comment.comment_id || null }>
  					<Divider />
  				  <p className={classes.smallText}>
  				    <b>From:</b> {comment.from}
  				  </p>
  				  <p className={classes.msg}>{comment.msg}</p>
  				  <p className={classNames(classes.smallText, classes.date)}>{comment.date || null}</p>
  				  <Divider />
  				</div>
  				))}
  		</div>
  		)
  }
}

const mapStateToProps = state => ({
  comments: state.tasksData.comment
})


export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Comment)
