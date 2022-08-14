import { Grid, Typography } from "@mui/material";
import { AutoStories } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styles from "../pages/styles.module.css";

export const NothingSelectedView = () => {
  let navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <Grid
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
      <Grid
        item
        xs={12}
        sx={{
          marginTop: "1rem",
        }}
      ></Grid>
      <div style={{
        paddingTop: "1rem",
      }}>
        <button className={styles.button} onClick={goToHome}>
          Volver a la pantalla principal.
        </button>
      </div>
    </Grid>
  );
};
