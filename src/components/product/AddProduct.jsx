import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const { getCategories, categories, addProduct } = useProducts();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);

  return (
    <Box
      sx={{
        width: "40vw",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        Add new product
      </Typography>
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Title"
        variant="outlined"
        fullWidth
        name="title"
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Description"
        variant="outlined"
        fullWidth
        name="description"
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Price"
        variant="outlined"
        fullWidth
        name="price"
      />
      {/* <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Category"
        variant="outlined"
        fullWidth
        name="category"
      /> */}

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product.category}
          label="Age"
          onChange={handleInp}
        >
          {categories?.map((item) => (
            <MenuItem value={item.id} key={item.id}>
              {item.title}
            </MenuItem>
          ))}

          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Image"
        variant="outlined"
        fullWidth
        name="image"
      />
      <Button
        sx={{
          m: 1,
        }}
        variant="outlined"
        fullWidth
        size="large"
      >
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
