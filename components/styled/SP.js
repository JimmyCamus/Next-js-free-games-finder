import styled from "styled-components";

const SP = styled.p`
  text-decoration: none;
  display: ${(props) => props.display};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin-right: ${(props) => props.margin};
  white-space: ${(props) => props.wrap};
  overflow: ${(props) => props.overflow};
  text-overflow: ${(props) => props.textOverflow};

  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.rFontSize};
    font-weight: ${(props) => props.rFontWeight};
    margin-right: ${(props) => props.rMargin};
  }
`;

export default SP;
