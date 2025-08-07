import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import { CONFIG } from './config-global';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename={CONFIG.site.basePath}>
    <Suspense>
      <App />
    </Suspense>
  </BrowserRouter>
);
