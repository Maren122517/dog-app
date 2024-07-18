import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { ProductListContainer, ProductItem, AddButton } from "./style"

const ProductList = () => {
  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ productId: product.id, quantity: 1 }));
  };

  return (
    <ProductListContainer>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <ProductItem key={product.id}>
            <span>{product.name} - ${product.price}</span>
            <AddButton onClick={() => handleAddToCart(product)}>Add to Cart</AddButton>
          </ProductItem>
        ))}
      </ul>
    </ProductListContainer>
  );
};

export default ProductList;
