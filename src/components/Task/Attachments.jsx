import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'

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
    return (
      <div>
        <Typography variant='headline' component='h3'>
                Attachments
        </Typography>
        <input
          type='file'
          onChange={ this.onPickFile }
        />
        {src && (
        	<div>
        	  <img src={src} alt='task attachments'/>
        	</div>
        )}
      </div>)
  }
}

export default Attachments
