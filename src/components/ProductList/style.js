import styled from 'styled-components';

const ProductListContainer = styled.div`
  padding: 20px;
`;

const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const AddButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: #45a049;
  }
`;

export { ProductListContainer, ProductItem, AddButton }