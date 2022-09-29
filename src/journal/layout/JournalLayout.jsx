import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { NavBar } from '../components';

const drawerWidth = 250;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#3F3351' }}>
      <NavBar />

      <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
