import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';
import useHover from '../hooks/useHover';

function Image({ className, img }) {
  const [hovered, element] = useHover();
  const { cartItems, toggleFavorite, addToCart, removeFromCart } = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>;
    } else if (hovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>;
    }
  }

  function cartIcon() {
    const inCart = cartItems.find(el => el.id === img.id);
    if (inCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>;
    } else if (hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>;
    }
  }

  return (
    <div ref={element} className={`${className} image-container`}>
      <img src={img.url} alt={img.id} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
}

export default Image;
