import ProductList from "../components/Products/ProductList";
import CartTotal from "../components/CartTotal/CartTotal";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <ProductList />
      <CartTotal />
    </>
  );
};
export default Home;
