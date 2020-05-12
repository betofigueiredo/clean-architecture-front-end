import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// Css
import * as s from './ItemRow.style';

// Actions
import { itemAdded } from '../../store/actions';

const ItemRow = ({ item }) => {
	const dispatch = useDispatch();

	function addItem() {
		const action = itemAdded({ item });
		dispatch(action);
	}

	return (
		<s.ItemButton
			type="button"
			onClick={addItem}
		>
			{item.name}
		</s.ItemButton>
	);
};

ItemRow.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string,
	}).isRequired,
};

export default ItemRow;
