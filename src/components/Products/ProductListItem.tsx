import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./ProductListItem.css";

type Props = {
  id: number;
  title: string;
  description: string;
  price: number;
};

const ProductListItem = (props: Props) => {
  return (
    <Card className="product" variant="outlined">
      <CardContent>
        <h4 className="product-title">{props.title}</h4>
        <div className="product-description">{props.description}</div>
        <div className="product-price">Price: $ {props.price}</div>
        <CardActions className="btn-wrap">
          <Button variant="outlined">Buy</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductListItem;
