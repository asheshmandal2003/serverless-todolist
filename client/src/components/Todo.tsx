import { Delete } from '@mui/icons-material';
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

interface todoProps {
  value: number;
  checked: Array<number>;
  handleToggle(value: number): void;
}

const Todo = ({ value, checked, handleToggle }: todoProps) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete-item">
          <Delete color="error" />
        </IconButton>
      }
    >
      <ListItemButton dense role={undefined} onClick={() => handleToggle(value)}>
        <ListItemIcon>
          <Checkbox edge="start" checked={checked.indexOf(value) !== -1} tabIndex={-1} disableRipple />
        </ListItemIcon>
        <ListItemText primary="Item 1" />
      </ListItemButton>
    </ListItem>
  );
};

export default Todo;
