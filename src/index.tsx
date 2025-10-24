// Entry point for the React application

import React from 'react'; // Import the React library, which is essential for creating React components
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the app into the DOM

import './index.scss'; // Import global styles from the SCSS file
import App from './App'; // Import the main App component, which serves as the root of the application

import reportWebVitals from './reportWebVitals'; // Import a utility to measure the app's performance (optional)

// Create a root element where the React app will be mounted
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Select the DOM element with id="root" (defined in public/index.html)
);

// Render the App component inside the root element
root.render(
  <React.StrictMode> 
    {/* React.StrictMode is a wrapper that activates additional checks and warnings in development mode */}
    <App /> {/* Render the App component, which contains the entire application */}
  </React.StrictMode>
);

// Optional: Measure the app's performance
// If you want to log performance metrics or send them to an analytics endpoint, pass a function here
// For example: reportWebVitals(console.log) logs results to the console
reportWebVitals(); 
