import { Send, Twitter } from '@mui/icons-material';
import { Avatar, Box, Divider, InputAdornment, List, Stack, TextField, Typography } from '@mui/material';
import Todo from './Todo';
import { useState } from 'react';

const Todos = () => {
  const [checked, setChecked] = useState(() => [-1]);

  const handleToggle = (value: number) => {
    const currentIdx = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIdx === -1) newChecked.push(value);
    else newChecked.splice(currentIdx, 1);
    setChecked(newChecked);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Box px={4} pt={3} display="flex" alignItems="center">
        <Avatar>
          <Twitter />
        </Avatar>
        <Typography variant="body1" ml={2}>
          Ashesh Mandal
        </Typography>
      </Box>
      <Divider />
      <Box px={4} maxHeight={590} overflow="scroll" zIndex={0}>
        <List>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
            return <Todo key={value} value={value} checked={checked} handleToggle={handleToggle} />;
          })}
        </List>
        <Box position="sticky" bottom={20} mt={3} zIndex={1} bgcolor="#fff">
          <TextField
            fullWidth
            variant="filled"
            label="New Item"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Send />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default Todos;
