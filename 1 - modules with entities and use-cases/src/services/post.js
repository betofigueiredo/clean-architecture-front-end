import axios from 'axios';

const baseURL = process.env.REACT_APP_BASEURL;
const instance = axios.create({
	baseURL,
	headers: {
		'Cache-Control': 'no-cache,no-store,must-revalidate,max-age=-1,private',
	},
});

export function post(url, data = {}) {
	const token = localStorage.getItem('token');
	if (token !== '') {
		instance.defaults.headers.common.token = token;
	}
	return instance.post(url, data);
}
