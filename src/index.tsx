import * as React from 'react';
import { render } from 'react-dom';
// Import the Hot Module Reloading App Container; use require to avoid type checking
const { AppContainer } = require('react-hot-loader');

// Import our App
import App from 'components/App';

// Tell Typescript that there is a global variable called Module
declare var module: { hot: any };

// Render the App inside the HMR App Container which handles the hot reloading
render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
);

// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept('./components/App', () => {
    // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./components/App').default;

    // And render it into the root element again
    render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      document.getElementById('app')
    );
  })
}
