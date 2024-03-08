import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ApiContext } from "../context/api.context";
import favoriteSelectedLogo from "../assets/Favorite-selected-logo.svg";
import favoriteUnselectedLogo from "../assets/Favorite-unselected-logo.svg";

interface ResumeProps {
  characterId: number | null;
}

const ResumeContainer = styled.div`
  height: 320px;
  top: 83.94px;
  padding: 0px 48px;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  justify-content: center;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 30px),
    calc(100% - 30px) 100%,
    0% 100%
  );

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    height: 607.89px;
  }
`;

const ResumeContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 960px;
  height: 320px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 607.89px;
    flex-direction: column;
    align-items: center;
  }
`;

const ResumeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 640px;
  height: 320px;
  gap: 24px;
  padding: 48px 0px 48px 48px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    height: 210px;
    padding: 24px 16px 48px 16px;
  }
`;

const Image = styled.img`
  width: 320px;
  height: 320px;

  @media (max-width: 768px) {
    width: 100%;
    height: 397.89px;
  }
`;

const ResumeNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;

  @media (max-width: 768px) {
    height: 38px;
    gap: 20px;
  }
`;

const ResumeName = styled.h2`
  width: 600px;
  height: 47px;
  margin: 0;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 46.88px;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    height: 38px;
    font-size: 32px;
    line-height: 37.5px;
  }
`;

const ResumeFavoritesLogo = styled.img`
  width: 24px;
  height: 21.68x;
`;

const ResumeDescription = styled.p`
  width: 592px;
  height: 57px;
  margin: 0;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Resume: React.FC<ResumeProps> = ({ characterId }) => {
  const { characterList, toggleFavorite } = useContext(ApiContext);
  console.log("resume");

  const character = characterId
    ? characterList.find((char) => char.id === characterId)
    : null;
  console.log("character", character);

  const [isFavorite, setIsFavorite] = useState(character?.isFavorite);

  console.log("character", character);

  if (!character) {
    console.log("No se encontró el personaje");
    return null;
  }

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    toggleFavorite(character.id);
  };

  return (
    <ResumeContainer>
      <ResumeContent>
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <ResumeInfo>
          <ResumeNameWrapper>
            <ResumeName>{character.name}</ResumeName>
            <a href="#" onClick={handleFavoriteToggle}>
              <ResumeFavoritesLogo
                src={isFavorite ? favoriteSelectedLogo : favoriteUnselectedLogo}
                alt="Favorites Logo"
              />
            </a>
          </ResumeNameWrapper>
          <ResumeDescription>
            {character.description
              ? character.description
              : "Description not available"}
          </ResumeDescription>
        </ResumeInfo>
      </ResumeContent>
    </ResumeContainer>
  );
};

export default Resume;
