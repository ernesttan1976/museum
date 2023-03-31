import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { BrowserRouter as Router } from 'react-router-dom'

import { theme } from './theme.js';
import { ThemeProvider } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  </ErrorBoundary>
)
