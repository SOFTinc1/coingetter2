import React from "react";
import "./search2.css";
import { GroupContainer, FormInputContainer, SearchImg } from "./search2.styles";
import SearchIcon from "../../../assets/svg/search.svg";

const Search2 = ({ placeholder, handleChange }) => (
  <GroupContainer>
    <FormInputContainer className="extend"/>
    {/* <SearchImg src={SearchIcon} /> */}
  </GroupContainer>
);

export default Search2;