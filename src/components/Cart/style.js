import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const RemoveButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: #e53935;
  }
`;

export { CartContainer, CartItem, RemoveButton }