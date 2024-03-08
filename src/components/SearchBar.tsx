import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ApiContext } from "../context/api.context";
import searchIcon from "../assets/Search-icon.svg";

const SearchContainer = styled.div`
  width: 100%;
  height: 77px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 16px;
  padding: 12px 48px;
  gap: 12px;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  height: 27px;
  flex: 1;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  outline: none;
  gap: 12px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 5px 3px;
  padding-left: 24px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  color: #aaaaaa;
  ::placeholder {
    color: #aaaaaa;
  }
`;

const ResultCounter = styled.span`
  width: 57px;
  height: 14px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.06px;
  color: #000000;
`;

const SearchBar: React.FC = () => {
  const { searchCharacters, characterList } = useContext(ApiContext);
  const [query, setQuery] = useState("");
  const [resultCount, setResultCount] = useState(0);

  useEffect(() => {
    setResultCount(characterList.length);
  }, [characterList]);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);
    try {
      await searchCharacters(searchTerm);
    } catch (error) {
      console.error("Error searching characters:", error);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search characters..."
        value={query}
        onChange={handleSearch}
      />
      <ResultCounter>{resultCount} results</ResultCounter>
    </SearchContainer>
  );
};

export default SearchBar;
