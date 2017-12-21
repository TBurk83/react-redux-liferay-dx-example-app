import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

class Footer extends Component {
	render() {
		return (
			<BottomNavigation
				showLabels>
				<BottomNavigationButton 
					label="All" 
					icon={<RestoreIcon />} 
					component={Link} to="/" />
				<BottomNavigationButton 
					label="Active" 
					icon={<FavoriteIcon />} 
					component={Link} to="/active" />
				<BottomNavigationButton 
					label="Completed" 
					icon={<LocationOnIcon />} 
					component={Link} to="/completed" />
			</BottomNavigation>
		)
	}
}

export default Footer