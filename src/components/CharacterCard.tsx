import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Character } from "../utils/types";
import favoriteSelectedLogo from "../assets/Favorite-selected-logo.svg";
import favoriteUnselectedLogo from "../assets/Favorite-unselected-logo.svg";
import { ApiContext } from "../context/api.context";
import { Link } from "react-router-dom";

interface CharacterCardProps {
  character: Character;
}

const CardContainer = styled.li`
  width: 188.57px;
  height: 245.97px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-bottom: 16px;
`;

const FavImageLink = styled(Link)`
  text-decoration: none;
  height: 189.97px;
`;

const FavLink = styled(Link)`
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  height: 189.97px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Details = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const RectangleWrapper = styled.div`
  width: 100%;
  height: 5.38px;
`;

const Rectangle = styled.div`
  width: 100%;
  height: 5.38px;
  background-color: #ec1d24;
`;

const NameFavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 24px 16px;
  background-color: black;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    0% 100%
  );
`;

const Name = styled.h2`
  width: 108px;
  height: 16px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  color: #ffffff;
`;

const FavoritesLogo = styled.img`
  width: 12px;
  height: 10.84px;
`;

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { toggleFavorite, selectCharacter } = useContext(ApiContext);
  const [isFavorite, setIsFavorite] = useState(character.isFavorite);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    toggleFavorite(character.id);
  };

  const handleCharacterClick = () => {
    selectCharacter(character.id);
  };

  useEffect(() => {
    setIsFavorite(character.isFavorite);
  }, [character.isFavorite]);

  return (
    <CardContainer>
      <FavImageLink
        to={`/character/${character.id}`}
        onClick={handleCharacterClick}
      >
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
      </FavImageLink>
      <Details>
        <RectangleWrapper>
          <Rectangle />
        </RectangleWrapper>
        <NameFavWrapper>
          <FavLink
            to={`/character/${character.id}`}
            onClick={handleCharacterClick}
          >
            <Name>{character.name}</Name>
          </FavLink>
          <a href="#" onClick={handleFavoriteToggle}>
            <FavoritesLogo
              src={isFavorite ? favoriteSelectedLogo : favoriteUnselectedLogo}
              alt="Favorites Logo"
            />
          </a>
        </NameFavWrapper>
      </Details>
    </CardContainer>
  );
};

export default CharacterCard;
