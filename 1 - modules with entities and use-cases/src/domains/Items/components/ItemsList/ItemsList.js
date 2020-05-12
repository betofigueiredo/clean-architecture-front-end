import React from 'react';

// Css
import * as s from './ItemsList.style';

// Components
import ItemRow from '../ItemRow';

// Mock
import items from './__mocks__/items';

const ItemsList = () => (
	<s.Wrapper>
		{items.map(item => (
			<ItemRow
				key={item.id}
				item={item}
			/>
		))}
	</s.Wrapper>
);

export default ItemsList;
