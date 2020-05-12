import React from 'react';

// Css
import * as s from './ItemsList.style';

// Mock
import items from './__mocks__/items';

const ItemsList = () => {
	function addItem() {
		return '';
	}

	return items.map(item => (
		<s.Wrapper>
			<s.ItemButton
				type="button"
				onClick={addItem}
			>
				{item.name}
			</s.ItemButton>
		</s.Wrapper>
	));
};

export default ItemsList;
