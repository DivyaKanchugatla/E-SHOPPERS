
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import Reducers from './reducers/Reducers';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

const middleware= applyMiddleware(thunk,logger)


const store=createStore(Reducers,composeWithDevTools(middleware))
export default store;

