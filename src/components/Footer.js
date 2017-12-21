import React, { Component } from 'react';


class Footer extends Component {
	render() {
		return (
			<BottomNavigation
				<Link 
					label="All" 
					icon={<RestoreIcon />} 
					to="/" />
				<Link 
					label="Active" 
					icon={<FavoriteIcon />} 
					to="/active" />
				<Link 
					label="Completed" 
					icon={<LocationOnIcon />} 
					to="/completed" />
		)
	}
}

export default Footer