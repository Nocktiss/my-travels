import React from 'react';

const Travel = ({ destination, country, distance, photo }) => {
	return (
		<header className="header-header">
			<img src={photo} className="header-logo" alt="img" />
			<p>
			Direction : <span>{destination}</span> dans la ville de  : <span>{country}</span>  à : {distance} de chez toi
        </p>
		</header>
	)
}

export default Travel