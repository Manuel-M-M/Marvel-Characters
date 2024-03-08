import React, { createContext, useState, useEffect } from "react";
import { getCharacterList, searchCharacters } from "./apiMethods";
import { ApiContextType, Character, Comic } from "../utils/types";

const ApiContext = createContext<ApiContextType>({
  characterList: [],
  favoritesList: [],
  getCharacterList: async () => {},
  setCharacterList: () => {},
  searchCharacters: async () => {},
  favoriteCount: 0,
  setFavoriteCount: () => {},
  toggleFavorite: () => {},
  selectedCharacterId: null,
  selectCharacter: () => {},
  comicList: [],
});

export const ApiContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [favoritesList, setFavoritesList] = useState<Character[]>([]);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(
    null,
  );
  const [comicList] = useState<Comic[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCharacterList();
        setCharacterList(data);
      } catch (error) {
        console.error("Error fetching character list:", error);
      }
    };

    fetchData();
  }, []);

  const searchCharactersHandler = async (query: string) => {
    let data: Character[] = [];
    if (query.trim() === "") {
      data = characterList;
    } else {
      data = await searchCharacters(query);
    }
    setCharacterList(data);
    setFavoriteCount(data.filter((character) => character.isFavorite).length);
  };

  const toggleFavoriteHandler = (characterId: number) => {
    const updatedCharacterList = characterList.map((character) => {
      if (character.id === characterId) {
        const updatedCharacter = {
          ...character,
          isFavorite: !character.isFavorite,
        };
        return updatedCharacter;
      }
      return character;
    });
    setCharacterList(updatedCharacterList);
    const updatedFavorites = updatedCharacterList.filter(
      (character) => character.isFavorite,
    );
    setFavoritesList(updatedFavorites);
    setFavoriteCount(updatedFavorites.length);
  };

  const selectCharacter = (characterId: number) => {
    setSelectedCharacterId(characterId);
  };

  return (
    <ApiContext.Provider
      value={{
        characterList,
        favoritesList,
        getCharacterList: () => {},
        setCharacterList,
        searchCharacters: searchCharactersHandler,
        favoriteCount,
        setFavoriteCount,
        toggleFavorite: toggleFavoriteHandler,
        selectedCharacterId,
        selectCharacter,
        comicList,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext };
