import { createStore } from 'redux';
import instaMockReducer from '../reducers/instaMockReducer';

const configureStore = (railsProps) => (
  createStore(instaMockReducer, railsProps)
);

export default configureStore;
