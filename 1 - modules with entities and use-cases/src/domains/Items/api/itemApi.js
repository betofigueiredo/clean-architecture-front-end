
// Services
import services from '../../../services';

function getItem({ item_id }) {
	const url = `/items/${item_id}`;
	return services.get(url);
}

const api = {
	getItem,
};

export default api;
