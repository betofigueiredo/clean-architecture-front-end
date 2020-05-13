import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// Components
import ItemEditionQuantity from '../ItemEditionQuantity';

const ItemEdition = () => {
	const item_name = useSelector(store => store
		.items?.item_on_edition?.name, shallowEqual) || '';

	return (
		<>
			<p>{item_name}</p>
			<ItemEditionQuantity />
		</>
	);
};

export default ItemEdition;
