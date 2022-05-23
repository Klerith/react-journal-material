import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components'
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';


export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );

    const { body, title, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date])

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState])

    useEffect(() => {
      if ( messageSaved.length > 0 ) {
          Swal.fire('Nota actualizada', messageSaved, 'success');
      }
    }, [messageSaved])
    
    

    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

    const onFileInputChange = ({ target }) => {
        if( target.files === 0 ) return;
        dispatch( startUploadingFiles( target.files ) );
    }

    const onDelete = () => {
        dispatch( startDeletingNote() );
    }


    return (
        <Grid 
            container 
            direction='row' 
            justifyContent='space-between' 
            alignItems='center' 
            sx={{ mb: 1 }}
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light' >{ dateString }</Typography>
            </Grid>
            <Grid item>

                <input 
                    type="file"
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />

                <IconButton
                    color="primary"
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>
                
                <Button 
                    disabled={ isSaving }
                    onClick={ onSaveNote }
                    color="primary" 
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={ 5 }
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid>

            <Grid container justifyContent='end'>
                <Button
                    onClick={ onDelete }
                    sx={{ mt: 2 }}
                    color="error"
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>


            {/* Image gallery */}
            <ImageGallery images={ note.imageUrls } />

        </Grid>
    )
}
