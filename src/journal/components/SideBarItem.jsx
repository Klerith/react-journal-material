import { useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ title = "", body, id}) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id }));
  };

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  return (
    <ListItem disablePadding sx={{
      color: "#E9A6A6",
      boxShadow: "0px 0px 1px 0px black",
      mb: 0.5,
    }}>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon color="#E9A6A6">
          <TurnedInNot htmlColor="#E9A6A6"/>
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
