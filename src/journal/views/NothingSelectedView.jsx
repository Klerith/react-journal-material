import { Grid, Typography, useTheme } from "@mui/material";
import { AutoStories } from "@mui/icons-material";

export const NothingSelectedView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "50vh",
      }}
      fullWidth
    >
      <Grid item xs={12}>
        <AutoStories sx={{ fontSize: 100, color: "#E9A6A6" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="#E9A6A6" variant="h5">
          Seleccioná o creá una palabra.
        </Typography>
      </Grid>
    </Grid>
  );
};
