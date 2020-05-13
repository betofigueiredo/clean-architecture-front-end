import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// CSS
import { Input } from 'antd';
// import * as s from './TeamRow.style';

// Actions
import { itemQuantityChanged } from '../../store/actions';

const ItemEditionQuantity = () => {
	const dispatch = useDispatch();
	const item_id = useSelector(store => store
		.items?.item_on_edition?.id, shallowEqual);
	const item_quantity = useSelector(store => store
		.items?.item_on_edition?.quantity, shallowEqual) || 0;
	const [quantity, setQuantity] = useState(item_quantity);
	const input_value = quantity === 0
		? ''
		: quantity;

	function handleChange(e) {
		const value = e.target.value || '';

		function updateRedux() {
			const action = itemQuantityChanged({
				item_id,
				quantity: value,
			});
			dispatch(action);
		}

		function updateState() {
			setQuantity(value);
			updateRedux();
		}

		updateState();
	}

	return (
		<Input
			value={input_value}
			onChange={handleChange}
		/>
	);
};

export default ItemEditionQuantity;
