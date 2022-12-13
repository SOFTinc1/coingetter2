import styled from "styled-components";

export const SwapContainer = styled.div`
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 246, 246, 0.63),
    rgba(236, 245, 255, 0.63)
  );

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

export const H1 = styled.h1`
  font-size: 72px;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
