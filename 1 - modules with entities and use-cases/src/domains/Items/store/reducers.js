import usuario from './store';
import reducerUtil from '../../../utils/redux/reducerUtil';

// Actions external logic
import loginReceived from './logic/loginReceived';
import loginReceivedFailed from './logic/loginReceivedFailed';
import loginRequested from './logic/loginRequested';
import authRequested from './logic/authRequested';
import authReceived from './logic/authReceived';
import authRequestedFailed from './logic/authRequestedFailed';
import checkExpiredToken from './logic/checkExpiredToken';
import authCleared from './logic/authCleared';

const funcs = {
	'[auth] LOGIN_RECEIVED': loginReceived,
	'[auth] LOGIN_REQUEST_FAILED': loginReceivedFailed,
	'[auth] LOGIN_REQUESTED': loginRequested,
	'[auth] AUTH_REQUESTED': authRequested,
	'[auth] AUTH_RECEIVED': authReceived,
	'[auth] AUTH_REQUEST_FAILED': authRequestedFailed,
	'[usuario] CHECK_EXPIRED_TOKEN': checkExpiredToken,
	'[usuario] AUTH_CLEARED': authCleared,
};

const reducer = reducerUtil(usuario, funcs);
export default reducer;
