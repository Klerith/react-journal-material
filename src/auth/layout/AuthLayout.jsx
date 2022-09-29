import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        paddingTop: '12rem',
      }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width: { sm: 450 },
          height: '100%',
          padding: 5,
          borderRadius: 2,
          border: '1px solid white',
        }}
      >
        <Typography variant="h5" sx={{ mb: 1, color: 'white' }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
