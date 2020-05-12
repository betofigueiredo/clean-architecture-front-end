/* eslint-disable */
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// Loading
// import LoadingPage from './components/LoadingPage';
import NotFound404 from './modules/shared/pages/NotFound404';

// Pages
// const Equipes = lazy(() => import('./modules/Equipes/pages/Equipes'));
import Team from './modules/Teams/pages/Team';
import Teams from './modules/Teams/pages/Teams';
import EmployeeProfile from './modules/Employees/pages/EmployeeProfile';

const Routes = () => (
	<Suspense fallback={<p>loading...</p>}>
		<Switch>
			<Route path="/members/:id" exact component={EmployeeProfile} />
			<Route path="/teams/:id" exact component={Team} />
			<Route path="/teams" exact component={Teams} />
			<Route path="/" exact component={NotFound404} />
			<Route path="*" exact component={NotFound404} />
		</Switch>
	</Suspense>
);

export default Routes;
