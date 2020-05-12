import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Items from './domains/Items/pages/Items';

const Routes = () => (
	<Switch>
		<Route path="/items" exact component={Items} />
		<Route path="/" exact component={Items} />
		<Route path="*" exact component={Items} />
	</Switch>
);

export default Routes;
