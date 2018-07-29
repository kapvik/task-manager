import React, { Component } from 'react'

// Own styles
import styles from './attachments.styles'

// Material ui styles component
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

class Attachments extends Component {
  constructor(props) {
  	super(props)
  	this.state = {
  	  src: ''
  	}

  	this.onPickFile = this.onPickFile.bind(this)
  }

  onPickFile(e) {
  	const { files } = e.target
  	const [firstFile] = files
  	this.setState({ src: URL.createObjectURL(firstFile) })
  }
  render() {
  	const { src } = this.state
    const { classes } = this.props
    return (
      <div>
        <Typography variant='headline' component='h3' color='primary'>
                Attachments
        </Typography>
        <input
          type='file'
          onChange={ this.onPickFile }
        />
        {src && (
        	<div className={classes.imgContainer}>
        	  <img className={classes.imgSize} src={src} alt='task attachments'/>
        	</div>
        )}
      </div>)
  }
}

export default withStyles(styles)(Attachments)
