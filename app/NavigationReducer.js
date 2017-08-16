import {Navigator} from './Navigation';

export default Reducer = (state, action) => {
    const newState = Navigator.router.getStateForAction(action, state);
    return newState || state;
};
