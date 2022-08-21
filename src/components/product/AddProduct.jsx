import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const AddProduct = () => {
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
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Category"
        variant="outlined"
        fullWidth
        name="category"
      />
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
