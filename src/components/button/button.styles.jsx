import styled from "styled-components";

export const ButtonContainer = styled.div`
  cursor: pointer;
  letter-spacing: 1px;
  background: #f5f5f5;
  color: #000;
  font-family: euclid;
  font-weight: 600;
  text-transform: capitalize;
  transition: all .9s ease-in-out;

  &:hover {
    background-color: #444946;
    color: #fff;
    border: none;
    transform: scale(1.0);
  }
`;
