import styled from "styled-components";

const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  margin: ${(props) => props.margin};
`;

export default SContainer;
