import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: "https://65767c9525699c15f9009e5980e6815e@o4508337845829632.ingest.us.sentry.io/4508405316714496",
  integrations: [Sentry.browserTracingIntegration()],
  release: "1.0.0",
  beforeSendSpan: (span) => {
    console.log('beforeSendSpan', span);
  },
  beforeSend(event){
    console.log('beforeSend', event);
  },
  tracesSampleRate: 1.0,
  debug: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
