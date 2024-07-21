import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { ProductListContainer, ProductItem, AddButton } from "./style"
import { FAILED, IDLE, LOADING, SUCCEEDED } from '../../state/status';
import { fetchProducts } from "../../state/products.slice";

const ProductList = () => {
  const products = useSelector(state => state.products.items);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);
  const dispatch = useDispatch();

  useEffect(() => {
    status === IDLE && dispatch(fetchProducts());
  }, [dispatch, status]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ productId: product.id, quantity: 1 }));
  };

  return (
    <ProductListContainer>
      <h2>Products</h2>
      {status === LOADING && <p>Loading...</p>}
      {status === FAILED && <p>Error: {error}</p>}
      {status === SUCCEEDED && (
        <ul>
          {products.map(product => (
            <ProductItem key={product.id}>
              <span>{product.title} - ${product.price}</span>
              <AddButton onClick={() => handleAddToCart(product)}>Add to Cart</AddButton>
            </ProductItem>
          ))}
        </ul>
      )}
    </ProductListContainer>
  );
};

export default ProductList;
