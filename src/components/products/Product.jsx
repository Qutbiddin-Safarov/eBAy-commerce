import React from "react";
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";

const Product = ({product}) => {
  const dispatch = useDispatch();
  const addToWishlist = () => {
    dispatch({ product, type: "ADD_TO_WISHLIST" })
  }
  const addToCart = () => {
    dispatch({ product, type: "ADD_TO_CART" })
  }

  return (
    <article className="product">
      <div className="product-top">
        <Link className="transarent-link" to={`/product/${product.id}`}>
          {product.images.length > 0 && product.images[0].startsWith("https://") ?
            <img className="product-image" src={product.images[0]} alt="" />
            :
            <img className="product-image" src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt="" />
          }
          <h3>{product.title}</h3>
        </Link>
      </div>
      <div className="product-bottom">
        <div>
          <strong>${product.price}</strong>
        </div>
        <FiHeart  onClick={addToWishlist}/>
        <FiShoppingCart onClick={addToCart}/>
      </div>
    </article>
  );
};

export default Product;
