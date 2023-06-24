import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const totalAmount = `${cartCtx.totalAmount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>총 금액</span>
        <span className={classes.totalspan}>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          취소
        </button>
        {hasItems && (
          <button className={classes.button} onClick={openPopup}>
            결제
          </button>
        )}
        {isOpen && (
          <div className={classes.overlay}>
            <div className={classes.modal}>
              <h2>{totalAmount} 결제가 완료됐습니다</h2>
              <button onClick={closePopup}>확인</button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
