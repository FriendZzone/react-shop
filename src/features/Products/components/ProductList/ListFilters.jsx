import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import React, {
  useEffect,
  useState,
} from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { productApi } from '../../../../api/productApi';
function ListFilters({ setCategory }) {
  const [categories, setCategories] = useState(
    []
  );
  useEffect(() => {
    (async () => {
      const res =
        await productApi.getCategoriesNames();
      setCategories(res.data);
    })();
  }, []);
  const handleCategoryChange = (value) => {
    setCategory(value);
  };
  return (
    <Box>
      <Typography
        align="center"
        variant="h6"
        color="primary"
      >
        Filters :
      </Typography>
      <Divider />
      <List>
        {categories.map((item) => (
          <ListItem key={item}>
            <Button
              fullWidth
              color="inherit"
              onClick={() =>
                handleCategoryChange(item)
              }
            >
              {item}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ListFilters;
