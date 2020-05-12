import { all, fork } from 'redux-saga/effects';

import itemsSaga from '../../domains/Items/store/sagas';

export default function* rootSaga() {
	yield all([
		fork(itemsSaga),
	]);
}
