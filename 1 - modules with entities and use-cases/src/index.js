import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Auxlr from './hocs/Auxlr';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const app = (
	<Auxlr>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Auxlr>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
