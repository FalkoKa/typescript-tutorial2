import Nav from './Nav';
import useCart from '../hooks/useCart';

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();
  const content = (
    <header className="header">
      <div className="header__titel-bar">
        <h1>Random Company</h1>
        <div className="header__price-box"></div>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );
  return content;
};

export default Header;
