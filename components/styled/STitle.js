import styled from "styled-components";

const STitle = styled.h1`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.rFontSize};
    font-weight: ${(props) => props.rFontWeight};
  }
`;

export default STitle;
