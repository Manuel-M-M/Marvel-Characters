import React, { useContext } from "react";
import { ApiContext } from "../context/api.context";
import CharacterResume from "../components/CharacterResume";
import Header from "../components/Header";
import ComicList from "../components/ComicList";

const CharacterDetails: React.FC = () => {
  const { selectedCharacterId } = useContext(ApiContext);

  return (
    <div>
      <Header />
      <CharacterResume characterId={selectedCharacterId} />
      <ComicList characterId={selectedCharacterId} />
    </div>
  );
};

export default CharacterDetails;
