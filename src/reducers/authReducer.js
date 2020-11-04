import { AUTHENTICATED, UNAUTHENTICATED} from '../actions/actionTypes';

function authReducer(state = false, action)
{
    switch(action.type) {
        case AUTHENTICATED:
            return true;

        case UNAUTHENTICATED:
            return false;//, error: action.error};

        default:
            return state;
    }
}

export default authReducer