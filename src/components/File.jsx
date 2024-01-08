import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const File = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <center>
    <Grid container spacing={2}>
      {product.map((list, index) => {
        return (
          <Grid xs={4} key={list.id}>
            <div>{list.title}</div>
            <img src={list.image} height="250" width="200px" />
            <div>cATEGORY {list.category}</div>
            <div>COST {list.rating.count}</div>
          </Grid>
        );
      })}
    </Grid>
    </center>
    // </Box>
  );
};

export default File;
