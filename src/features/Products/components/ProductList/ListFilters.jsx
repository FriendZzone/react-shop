import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
function ListFilters(props) {
  return (
    <Box>
      <Typography variant="h6" color="primary">
        <FilterAltIcon />
        Filters :
      </Typography>
      <Divider />
      ListFilters
      <List>
        <ListItem>
          <Button fullWidth>Price</Button>
        </ListItem>
        <ListItem>
          <Button fullWidth>Category</Button>
        </ListItem>
        <ListItem>
          <Button fullWidth>Location</Button>
        </ListItem>
        <ListItem>
          <Button fullWidth>Year</Button>
        </ListItem>
        <ListItem>
          <Button fullWidth>Price</Button>
        </ListItem>
      </List>
    </Box>
  );
}

export default ListFilters;
