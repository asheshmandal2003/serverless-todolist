import Modal from '@mui/material/Modal';
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useCallback, useState } from 'react';
import * as MUIIcons from '@mui/icons-material';
import { FlexBetween } from '../partials/FlexBetween';

interface ModalProps {
  open: boolean;
  handleClose(): void;
}

export const ModalForm: React.FC<ModalProps> = ({ open, handleClose }) => {
  const phone = useMediaQuery('(max-width: 600px)');
  const [Icons, setIcons] = useState([
    MUIIcons['Home'],
    MUIIcons['Description'],
    MUIIcons['VideoCall'],
    MUIIcons['Photo'],
    MUIIcons['Book'],
    MUIIcons['School'],
  ]);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: phone ? 280 : 460,
    bgcolor: 'background.paper',
    boxShadow: 18,
    p: 4,
    outline: 'none',
    border: 'none',
    borderRadius: 2,
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Stack spacing={2}>
          <FlexBetween alignItems="center">
            <Typography variant="h6" fontWeight={600}>
              Create New List
            </Typography>
            <IconButton size="large" onClick={handleClose}>
              <MUIIcons.Close />
            </IconButton>
          </FlexBetween>
          <Typography>Create a new list</Typography>
          <TextField variant="standard" label="New list" />
          <TextField variant="standard" label="Icon Search" />
          <FlexBetween flexWrap="wrap" rowGap={1}>
            {Icons.map((Icon, idx) => (
              <Box
                key={idx}
                border="1px solid #cfd8dc"
                borderRadius={2}
                p={phone ? 1 : 2}
                sx={{
                  transition: '0.2s ease-out',
                  ':hover': {
                    bgcolor: '#eeeeee',
                  },
                }}
              >
                <Icon color="disabled" fontSize={phone ? 'medium' : 'large'} />
              </Box>
            ))}
          </FlexBetween>
          <Box display="flex">
            <Box ml="auto">
              <Button sx={{ fontWeight: 600 }}>Cancel</Button>
              <Button sx={{ fontWeight: 600 }}>Create</Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};
