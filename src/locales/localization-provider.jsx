import 'dayjs/locale/en';
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// ----------------------------------------------------------------------

export default function LocalizationProvider({ children }) {
  dayjs.locale('en');
  return <MuiLocalizationProvider dateAdapter={AdapterDayjs}>{children}</MuiLocalizationProvider>;
}
