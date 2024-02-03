import { Delete, Edit } from '@mui/icons-material';
import { Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material';

interface MenuProps {
  anchorEl: null | HTMLElement;
  handleClose(): void;
}

const OptionMenu = ({ anchorEl, handleClose }: MenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      keepMounted
    >
      <MenuList sx={{ width: 200 }}>
        <MenuItem>
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Delete color="error" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ color: '#d50000' }} primary="Delete" />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default OptionMenu;
