import { paths } from 'src/routes/paths';

import packageJson from '../package.json';

// ----------------------------------------------------------------------

export const CONFIG = {
  site: {
    name: 'RUNC',
    basePath: import.meta.env.VITE_BASE_PATH ?? '',
    version: packageJson.version,
  },

  auth: {
    redirectPath: paths.dashboard.root,
  },
};
