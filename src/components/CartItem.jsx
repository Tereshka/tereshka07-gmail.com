import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';
import useHover from '../hooks/useHover';

function CartItem({ item }) {
  const [hovered, element] = useHover();
  const { removeFromCart } = useContext(Context);

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

  return (
    <div className="cart-item">
      <i
        ref={element}
        className={iconClassName}
        onClick={() => removeFromCart(item.id)}
      >
      </i>
      <img src={item.url} width="130px" alt={item.id} />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
      url: PropTypes.string.isRequired
  })
}

export default CartItem;