import styled from "styled-components";

const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};

  @media screen and (max-width: 768px) {
    width: ${(props) => props.rWidth};
  }
`;

export default SContainer;
