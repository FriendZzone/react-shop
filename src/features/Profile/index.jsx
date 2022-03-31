import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Divider,
} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { convertFullName } from '../../utils';
import { getUserInfo } from '../Authentication/userSelectors';
import EditForm from './components/EditForm';
function Profile(props) {
  const user = useSelector(getUserInfo);
  const fullName = convertFullName(
    user.firstName,
    user.lastName
  );
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box mt={3}>
      <Paper>
        <Container maxWidth="xs">
          <Typography
            variant="h5"
            fontWeight="bold"
            align="center"
            color="primary"
          >
            Profile
          </Typography>
          <Divider />
          <Typography>Full Name:</Typography>
          <Typography
            variant="body1"
            fontWeight="bold"
            gutterBottom
          >
            {fullName}
          </Typography>

          <Typography>Email:</Typography>
          <Typography
            variant="body1"
            fontWeight="bold"
            gutterBottom
          >
            {user.email}
          </Typography>
          <Typography>Gender:</Typography>
          <Typography
            variant="body1"
            fontWeight="bold"
            gutterBottom
          >
            {user.gender}
          </Typography>
          <Typography>Address:</Typography>
          <Typography
            variant="body1"
            fontWeight="bold"
            gutterBottom
          >
            {user.address || 'no update'}
          </Typography>
          <Typography>Phone:</Typography>
          <Typography
            variant="body1"
            fontWeight="bold"
            gutterBottom
          >
            {user.phone || 'no update'}
          </Typography>

          <EditForm
            open={open}
            onClose={handleClose}
            user={user}
          />
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            fullWidth
          >
            Edit Information
          </Button>
        </Container>
      </Paper>
    </Box>
  );
}

export default Profile;
