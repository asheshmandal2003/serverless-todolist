import Navbar from '../../components/Navbar';
import { ModalForm } from '../../components/Modal';
import { useState } from 'react';
import {
  Alert,
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { MoreVert, Twitter } from '@mui/icons-material';

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Navbar handleOpen={handleOpen} />
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ height: '100%' }}
      >
        <Grid
          item
          xs={4}
          sm={3}
          md={4}
          sx={{ borderRight: '1px solid rgba(0, 0, 0, 0.12)', height: '91vh' }}
        >
          <List>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <Twitter />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Twitter" secondary="Feb 1, 2024" />
              <IconButton>
                <MoreVert />
              </IconButton>
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <Twitter />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Twitter" secondary="Feb 1, 2024" />
              <IconButton>
                <MoreVert />
              </IconButton>
            </ListItemButton>
            <Divider />
          </List>
        </Grid>
        <Grid item xs={0} sm={5} md={8} p={4}>
          <Alert severity="info" variant="standard">
            You have not created any tasks in this list!
          </Alert>
        </Grid>
      </Grid>
      <ModalForm open={open} handleClose={handleClose} />
    </Box>
  );
}
