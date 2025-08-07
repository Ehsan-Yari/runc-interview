import 'src/global.css';

// ----------------------------------------------------------------------

import { ErrorBoundary } from 'react-error-boundary';

import { Router } from 'src/routes/sections';

import { LocalizationProvider } from 'src/locales';

import { ProgressBar } from 'src/components/progress-bar';

export default function App() {
  return (
    <LocalizationProvider>
      <ProgressBar />
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </LocalizationProvider>
  );
}
