import ReactOnRails from 'react-on-rails';

import HelloWorldApp from './HelloWorldApp';
import InstaMockApp from './InstaMockApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorldApp,
  InstaMockApp,
});
