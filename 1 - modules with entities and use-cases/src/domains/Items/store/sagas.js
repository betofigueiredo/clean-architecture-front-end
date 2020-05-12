import { takeLatest, put } from 'redux-saga/effects';

// Api
import { __api__login, __api__auth } from '../api/authApi';

function* fetchLogin({ email, senha }) {
	try {
		const payload = yield __api__login({ email, senha });
		yield put({ type: '[auth] LOGIN_RECEIVED', payload });
	} catch (error) {
		yield put({ type: '[auth] LOGIN_REQUEST_FAILED', error });
	}
}

function* fetchAuth() {
	try {
		const payload = yield __api__auth();
		yield put({ type: '[auth] AUTH_RECEIVED', payload });
	} catch (error) {
		yield put({ type: '[auth] AUTH_REQUEST_FAILED', error });
	}
}

// saga
export default function* usuarioSaga() {
	yield takeLatest(['[auth] LOGIN_REQUESTED'], fetchLogin);
	yield takeLatest(['[auth] AUTH_REQUESTED'], fetchAuth);
}
