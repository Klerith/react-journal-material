import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  Toolbar,
  Typography,
} from '@mui/material';
import styles from './styles.module.css';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { startLogout } from '../../store/auth';
import { SideBarItem } from './SideBarItem';
import { setActiveNote } from '../../store/journal';

export const NavBar = ({ drawerWidth = 240 }) => {
  const { notes } = useSelector((state) => state.journal);
  const [result, setResult] = useState([]);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  let filterEmptyNotes = notes.filter((note) => note.body.length > 0);
  const notesCount = filterEmptyNotes.length;

  function SortArray(a, b) {
    return a.title.localeCompare(b.title);
  }

  const handleOnChangeInput = (e) => {
    if (e.target.value !== '') {
      const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setResult(filteredNotes);
    } else {
      setResult([]);
    }
  };

  const handleSearch = () => {
    const result = notes.filter((note) => note.title.includes(searchTerm));
    setResult(result);
  };

  const sortedNotes = filterEmptyNotes.sort(SortArray);

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: '0px 0px 1px 0px black',
        }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              sx={{ color: '#E9A6A6' }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuOutlined />
            </IconButton>

            <IconButton color="error" onClick={onLogout}>
              <LogoutOutlined />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav" height="100vh">
        <Drawer
          variant="temporary"
          open={isDrawerOpen}
          sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'content-box',
              width: drawerWidth,
              backgroundColor: '#3F3351',
              scrollbarColor: 'red',
            },
          }}
          onClose={() => setIsDrawerOpen(false)}
        >
          <input
            type="text"
            className={styles.search}
            placeholder="Buscar palabra por título"
            autofocus
            onChange={(e) => handleOnChangeInput(e)}
          />
          <Toolbar
            sx={{
              backgroundColor: 'primary.main',
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: '#E9A6A6',
              }}
            >
              {notesCount} palabras.
            </Typography>
          </Toolbar>
          <Divider />

          <List
            onClick={() => setIsDrawerOpen(false)}
            sx={{
              backgroundColor: 'primary.main',
            }}
          >
            {result.length > 0
              ? result.map((note) => (
                  <SideBarItem
                    key={note.id}
                    title={note.title}
                    body={note.body}
                    id={note.id}
                  />
                ))
              : notes.map((note) => <SideBarItem key={note.id} {...note} />)}
          </List>
        </Drawer>
      </Box>
    </React.Fragment>
  );
};
