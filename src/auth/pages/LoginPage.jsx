import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from "../../hooks";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log({ email, password })
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    // console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Ingresar con Google">
      <form
        aria-label="submit-form"
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid item xs={12} sm={6}>
          <Button
            disabled={isAuthenticating}
            variant="contained"
            aria-label="google-btn"
            onClick={onGoogleSignIn}
          >
            <Google />
            <Typography sx={{ ml: 1 }}>Google</Typography>
          </Button>
        </Grid>
      </form>
    </AuthLayout>
  );
};
