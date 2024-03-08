import React, { useContext } from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import { ApiContext } from "../context/api.context";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0px 48px;
  width: 100%;
  box-sizing: border-box;
`;

const FavoriteList: React.FC = () => {
  const { favoritesList } = useContext(ApiContext);

  return (
    <ListContainer>
      {favoritesList.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </ListContainer>
  );
};

export default FavoriteList;
