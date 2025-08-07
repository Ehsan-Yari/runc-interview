import { Navigate, useRoutes } from 'react-router-dom';

import { CONFIG } from 'src/config-global';

import { dashboardRoutes } from './dashboard';

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: '/',

      element: <Navigate to={CONFIG.auth.redirectPath} replace />,
    },

    // Dashboard
    ...dashboardRoutes,

    // No match
    { path: '*', element: <Navigate to="/dashboard" replace /> },
  ]);
}
