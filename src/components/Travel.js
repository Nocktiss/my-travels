import React from 'react';

const Travel = ({ destination, country, distance, photo }) => {
	return (
		<header className="header-header">
			<img src={photo} className="header-logo" alt="img" />
			<p>
			Bienvenue au : <span>{destination}</span> dans la de  : <span>{country}</span>  à : {distance} de chez toi
        </p>
		</header>
	)
}

export default Travel