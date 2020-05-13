import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// Components
import ItemsList from '../components/ItemsList';
import ItemEdition from '../components/ItemEdition';

const Items = () => {
	const item_on_edition_id = useSelector(store => store
		.items?.item_on_edition?.id, shallowEqual) || null;
	const has_item_to_edit = item_on_edition_id !== null;

	return has_item_to_edit
		? <ItemEdition />
		: <ItemsList />;
};

export default Items;
