import Box from '@mui/material/Box';

import { layoutClasses } from 'src/layouts/classes';

// ----------------------------------------------------------------------

export function Main({ children, isNavHorizontal, sx, ...other }) {
  return (
    <Box
      component="main"
      className={layoutClasses.main}
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        ...(isNavHorizontal && {
          '--layout-dashboard-content-pt': '40px',
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
