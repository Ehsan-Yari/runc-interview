import { Main } from './main';
import { LayoutSection } from '../core/layout-section';

// ----------------------------------------------------------------------

export function DashboardLayout({ children }) {
  return (
    <LayoutSection>
      <Main>{children}</Main>
    </LayoutSection>
  );
}
