import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import FavoriteList from "../components/FavoritesList";

const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  top: 84px;
  gap: 24px;
  padding: 48px 0px;
`;

const Title = styled.div`
  width: 1416px;
  height: 38px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 37.5px;
  color: #000000;
  padding: 0px 48px;
`;

const Favorites: React.FC = () => {
  console.log("Favorites");

  return (
    <FavoritesContainer data-testid="home-container">
      <Header />
      <Main>
        <Title>Favorites</Title>
        <SearchBar />
        <FavoriteList />
      </Main>
    </FavoritesContainer>
  );
};

export default Favorites;
