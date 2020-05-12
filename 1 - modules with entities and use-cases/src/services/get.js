import axios from 'axios';

const baseURL = process.env.REACT_APP_BASEURL;
const instance = axios.create({
	baseURL,
	maxRedirects: 0,
	// validateStatus: status => (status >= 200 && status < 300) || status === 404,
});

export function get(url, data = {}) {
	const token = localStorage.getItem('token');
	instance.defaults.headers.common.token = token;
	const params = { ...data };
	return instance.get(url, { params });
}
