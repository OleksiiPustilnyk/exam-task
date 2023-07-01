import Typography from "@mui/material/Typography";

type Props = {};

const CartTotal = (props: Props) => {
  return (
    <Typography
      align="center"
      sx={{
        marginTop: "30px",
      }}
    >
      Total: 0
    </Typography>
  );
};
export default CartTotal;
