import React, { Component } from 'react'


import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class User extends Component {
	render() { 
		return (
		<Grid item xs={12}>
			<Avatar alt="User Avatar" src="https://randomuser.me/api/portraits/thumb/women/68.jpg" /> 
			<Typography variant="subheading">Name: </Typography>
			<Typography variant="subheading">Email: </Typography>
			<Typography variant="subheading">Date of birth: </Typography>
			<Divider />
			<Typography variant="subheading" align="center">Skills </Typography>
			<List component="nav">
				<ListItem button>
					<ListItemText primary="Trash" />
				</ListItem>	        
			</List>
		</Grid>
		)
	}

}


export default User				     