import React from 'react';
import { Provider } from 'react-redux';

import store from '../store/instaMockStore';
import InstaMockContainer from '../containers/InstaMockContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const InstaMockApp = (props, _railsContext) => (
  <Provider store={store}>
    <InstaMockContainer />
  </Provider>
);

export default InstaMockApp;
