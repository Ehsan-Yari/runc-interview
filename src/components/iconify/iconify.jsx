import { Icon } from '@iconify/react';
import { useId, forwardRef } from 'react';

import { styled } from '@mui/material/styles';

import { iconifyClasses } from './classes';
import { allIconNames, registerIcons } from './register-icons';

// ----------------------------------------------------------------------

export const Iconify = forwardRef(({ className, icon, width = 20, height, sx, ...other }, ref) => {
  const uniqueId = useId();

  if (!allIconNames.includes(icon)) {
    console.warn(
      [
        `Icon "${icon}" is currently loaded online, which may cause flickering effects.`,
        `To ensure a smoother experience, please register your icon collection for offline use.`,
        `More information is available at: https://docs.minimals.cc/icons/`,
      ].join('\n')
    );
  }

  registerIcons();

  return (
    <IconRoot
      ref={ref}
      ssr
      id={uniqueId}
      icon={icon}
      className={iconifyClasses.root.concat(className ? ` ${className}` : '')}
      sx={[
        {
          width,
          flexShrink: 0,
          height: height ?? width,
          display: 'inline-flex',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  );
});

// ----------------------------------------------------------------------

const IconRoot = styled(Icon)``;
