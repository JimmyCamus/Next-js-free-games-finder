import styled from "styled-components";

const SCard = styled.div`
  background-color: #303030;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  color: #fff;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    flex-direction: ${(props) => props.rFlexDirection};
    margin: ${(props) => props.rMargin};
    width: ${(props) => props.rWidth};
    height: ${(props) => props.rHeight};
  }
`;

export default SCard;
