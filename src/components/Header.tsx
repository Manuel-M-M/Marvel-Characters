import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import marvelLogo from "../assets/Marvel-logo.svg";
import favoritesLogo from "../assets/Union.svg";
import { ApiContext } from "../context/api.context";

const HeaderContainer = styled.div`
  background-color: black;
  height: 84px;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 48px;
  box-sizing: border-box;
  border-bottom: 1px solid #333333;
`;

const Logo = styled.img`
  width: 130px;
  height: 52px;
  cursor: pointer;
`;

const FavoritesContainer = styled.div`
  width: 56px;
  height: 37.68px;
  padding: 8px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FavoritesLogo = styled.img`
  width: 24px;
  height: 21.68px;
  margin-right: 5px;
  cursor: pointer;
`;

const FavoriteCount = styled.span`
  width: 8px;
  height: 19px;
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  text-decoration: none;
  cursor: pointer;
`;

const Header: React.FC = () => {
  const { favoriteCount } = useContext(ApiContext);

  return (
    <HeaderContainer data-testid="HeaderContainer">
      <Link to="/">
        <Logo src={marvelLogo} alt="Marvel Logo" />
      </Link>
      <FavoritesContainer>
        <Link
          to="/favorites"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FavoritesLogo src={favoritesLogo} />
          <FavoriteCount>{favoriteCount}</FavoriteCount>
        </Link>
      </FavoritesContainer>
    </HeaderContainer>
  );
};

export default Header;
