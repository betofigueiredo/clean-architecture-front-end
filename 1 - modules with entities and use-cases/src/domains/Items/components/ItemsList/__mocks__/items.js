const items = [1, 2, 3, 4]
	.map(item_id => ({
		id: item_id,
		name: `Cimento ${item_id}`,
		quantity: 0,
		unity: '',
		price: 0,
		discount: 0,
		observations: '',
		properties: [],
		order_id: 100,
		status: 1,
		created_at: '',
		updated_at: '',
	}));

export default items;
