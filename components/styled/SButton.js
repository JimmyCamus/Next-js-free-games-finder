import styled from "styled-components";

const SButton = styled.button`
  background-color: #303030;
  color: #fff;
  border-radius: 3px;
  border: none;
  margin: 20px;
  padding: 15px 20px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }
`;

export default SButton;
