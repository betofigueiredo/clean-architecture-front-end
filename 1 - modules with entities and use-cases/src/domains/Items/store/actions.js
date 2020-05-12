export const loginRequested = ({ email, senha }) => ({
	type: '[auth] LOGIN_REQUESTED',
	email,
	senha,
});

export const authRequested = () => ({
	type: '[auth] AUTH_REQUESTED',
});

export const clearAuth = () => ({
	type: '[auth] AUTH_CLEARED',
});
