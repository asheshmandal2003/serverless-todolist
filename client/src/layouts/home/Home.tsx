import Navbar from '../../components/Navbar';
import { ModalForm } from '../../components/Modal';
import { useState } from 'react';
import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { MoreVert, Twitter } from '@mui/icons-material';
import Todos from '../../components/Todos';
import OptionMenu from '../../components/Menu';

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Navbar handleOpen={handleOpen} />
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ height: '100%' }}>
        <Grid item xs={4} sm={3} md={4} sx={{ borderRight: '1px solid rgba(0, 0, 0, 0.12)', height: '91vh' }}>
          <List>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <Twitter />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Twitter" secondary="Feb 1, 2024" />
              <IconButton onClick={handleMenuOpen}>
                <MoreVert />
              </IconButton>
              <OptionMenu anchorEl={anchorEl} handleClose={handleMenuClose} />
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
        <Grid item xs={0} sm={5} md={8}>
          <Todos />
        </Grid>
      </Grid>
      <ModalForm open={open} handleClose={handleClose} />
    </Box>
  );
}
