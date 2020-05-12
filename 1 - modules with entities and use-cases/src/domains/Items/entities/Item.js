const Item = ({
	id = null,
	name = '',
	quantity = 0,
	unity,
	price = 0,
	discount = 0,
	observations = '',
	properties = [],
	order_id,
	status,
	created_at,
	updated_at,
} = {}) => {
	if (!id) {
		throw new Error('Item must have an id');
	}
	if (!name) {
		throw new Error('Item must have a name');
	}
	if (!order_id) {
		throw new Error('Item must belong to an order');
	}

	function emptyQuantity() {
		return quantity === 0;
	}

	function getPrice() {
		return (quantity * price) - discount;
	}

	return Object.freeze({
		getName: () => name,
		getUnity: () => unity,
		getPrice: () => getPrice(),
		emptyQuantity: () => emptyQuantity(),
	});
};

export default Item;
