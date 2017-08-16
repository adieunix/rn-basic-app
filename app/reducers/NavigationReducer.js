import {Navigator} from '../helpers/Navigation';

export default Reducer = (state, action) => {
    const newState = Navigator.router.getStateForAction(action, state);
    return newState || state;
};
