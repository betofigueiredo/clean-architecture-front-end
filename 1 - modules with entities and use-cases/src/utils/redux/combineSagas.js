import { all, fork } from 'redux-saga/effects';

import sharedSaga from '../../modules/shared/store/sagas';
import usuarioSaga from '../../modules/Usuario/store/sagas';

export default function* rootSaga() {
	yield all([
		fork(sharedSaga),
		fork(usuarioSaga),
	]);
}
