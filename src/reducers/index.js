// redux form
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';

const rootReducers = combineReducers({
    form: formReducer,
    counterReducer
});

export default rootReducers;

