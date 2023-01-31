import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function CocktailItem({ name, image }) {
	return (
		<div className='cocktail-item'>
			<h3 className='item-name'>{name}</h3>
			<img className='item-image' src={image} alt={name} />
		</div>
	);
}

CocktailItem.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default CocktailItem;
