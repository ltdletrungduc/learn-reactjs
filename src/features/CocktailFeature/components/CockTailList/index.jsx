import React from 'react';
import PropTypes from 'prop-types';
import CocktailItem from '../CocktailItem';

import './styles.css';

function CocktailList({ list }) {
	return (
		<ul className='cocktail-list'>
			{list.map((item, index) => (
				<li key={index}>
					<CocktailItem name={item.strDrink} image={item.strDrinkThumb} />
				</li>
			))}
		</ul>
	);
}

CocktailList.propTypes = {
	list: PropTypes.array,
};

export default CocktailList;
