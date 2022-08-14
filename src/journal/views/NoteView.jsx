import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { DeleteOutline, SaveOutlined, ArrowBack } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import styles from "../components/styles.module.css";

import { useForm } from "../../hooks/useForm";
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
} from "../../store/journal";

import { startNewNote } from "../../store/journal/thunks";

export const NoteView = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  const dispatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const { body, title, onInputChange, formState, onResetForm } = useForm(note);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Palabra guardada correctamente.", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
    dispatch(startNewNote());
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  useEffect(() => {
    onResetForm();
  }, [onSaveNote]);

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#3F3351",
      }}
    >
      <div className={styles.arrowBack}>
        <ArrowBack onClick={goToHome} />
      </div>
      <Grid container>
        <TextField
          fullWidth={true}
          type="text"
          isRequired={true}
          variant="filled"
          placeholder="Nombre de la palabra *"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
          inputProps={{
            style: {
              color: "#E9A6A6",
            },
          }}
        />

        <TextField
          fullWidth={true}
          type="text"
          isRequired={true}
          variant="filled"
          multiline
          placeholder="Descripción de la palabra *"
          minRows={5}
          name="body"
          value={body}
          sx={{ border: "none", mb: 1 }}
          onChange={onInputChange}
          inputProps={{
            style: {
              color: "#E9A6A6",
            },
          }}
        />
      </Grid>

      <Grid container justifyContent="space-between">
        <Button disabled={isSaving} onClick={onSaveNote} color="primary">
          <SaveOutlined sx={{ color: "#E9A6A6" }} />
        </Button>
        <Button onClick={onDelete} color="error">
          <DeleteOutline />
        </Button>
      </Grid>
    </Grid>
  );
};
