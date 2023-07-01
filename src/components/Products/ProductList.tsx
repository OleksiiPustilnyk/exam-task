import { Button, Grid, Typography } from "@mui/material";
import ProductListItem from "./ProductListItem";
import productsArray from "../../utils/productsArray";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        sx={{
          marginBottom: "30px",
        }}
      >
        Our shop page
      </Typography>
      <Typography
        align="center"
        sx={{
          marginBottom: "30px",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            margin: "10px",
          }}
        >
          USD
        </Button>
        <Button
          variant="outlined"
          sx={{
            margin: "10px",
          }}
        >
          EUR
        </Button>
        <Button
          variant="outlined"
          sx={{
            margin: "10px",
          }}
        >
          UAH
        </Button>
        <Button
          variant="outlined"
          sx={{
            margin: "10px",
          }}
        >
          PLN
        </Button>
      </Typography>

      <Grid container spacing={4}>
        {productsArray.map((product) => (
          <Grid item xs={12} sm={6} md={4}>
            <ProductListItem
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default ProductList;
