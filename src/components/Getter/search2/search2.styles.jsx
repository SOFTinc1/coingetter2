import styled from "styled-components";
import SearchIcon from "../../../assets/svg/search.svg";

export const GroupContainer = styled.form`
  &:focus {
    @media screen and (max-width: 800px) {
    }
  }

  @media screen and (max-width: 800px) {
    // width: auto;
    padding: 10px 20px;
    background: #eaddff21;
    border-radius: 50px;
    margin: 0;
  }
`;
export const FormInputContainer = styled.input`
  @media screen and (max-width: 800px) {
    width: 25px;
    border-radius: 4px;
    font-size: 16px;
    background: transparent;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    background-image: url(${SearchIcon});
    border: none;
    color: #000;
  }
  &:focus {
    @media screen and (max-width: 400px) {
      background: #FAFAFA;
      width: 100vw;
      position: absolute;
      border-radius: 0px;
      margin: -37px 0 0 -30px;
      // margin: -37px 0 0 -287px;
      padding: 25px 0 25px 5px;
      color: #000;
      outline: none;
      border: none;
    }
    @media screen and (max-width: 525px) {
      background: #FAFAFA;
      width: 100%;
      position: absolute;
      margin: -37px 0 0 -30px;
      border-radius: 0px;
      padding: 25px 0 25px 5px;
      color: #000;
      outline: none;
      border: none;
    }
  }
`;
