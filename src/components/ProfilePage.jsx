import React, { Component } from 'react'
import User from './User'


import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


class ProfilePage extends Component {
	render() {
		return (
			<Grid container >
				<Grid item xs={12}>
					<Typography variant="title" align="center"> Personal Task Manager </Typography>
				</Grid>
				
				<User />

			</Grid>
		)
	}
}


export default ProfilePage