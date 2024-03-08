import React, { useContext } from "react";
import { ApiContext } from "../context/api.context";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0px 48px;
  width: 100%;
  box-sizing: border-box;
`;

const CharacterList: React.FC = () => {
  const { characterList } = useContext(ApiContext);

  return (
    <ListContainer>
      {characterList.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </ListContainer>
  );
};

export default CharacterList;
