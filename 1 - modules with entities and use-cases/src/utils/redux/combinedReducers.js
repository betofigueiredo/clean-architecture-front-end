// reducers
import auth from '../../modules/Auth/store/reducers';
import employees from '../../modules/Employees/store/reducers';
import teams from '../../modules/Teams/store/reducers';

const combined_reducers = {
	auth,
	employees,
	teams,
};

export default combined_reducers;
