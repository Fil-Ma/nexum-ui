import styled from "styled-components";

export const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  &:focus-within {
    border-color: #6200ee;
    box-shadow: 0 0 4px #6200ee;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 8px;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  margin-right: 4px;
  color: #6200ee;
  padding: 8px 10px;

  &:hover {
    color: #3700b3;
  }
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #333;
  }
`;
