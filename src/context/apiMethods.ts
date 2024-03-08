import { MD5 } from "crypto-js";

const baseURL = "http://gateway.marvel.com/v1/public";
const publicKey = import.meta.env.VITE_APP_MARVEL_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_APP_MARVEL_PRIVATE_KEY;

export const getCharacterList = async () => {
  const ts = Date.now().toString();
  const limit = 50;
  const hash = MD5(ts + privateKey + publicKey);

  try {
    const response = await fetch(
      `${baseURL}/characters?apikey=${publicKey}&ts=${ts}&limit=${limit}&hash=${hash}`,
    );
    const data = await response.json();
    const characters = data.data.results;

    return characters;
  } catch (error) {
    console.error("Error fetching Marvel characters:", error);
    return [];
  }
};

export const searchCharacters = async (query: string) => {
  const ts = Date.now().toString();
  const limit = 50;
  const hash = MD5(ts + privateKey + publicKey);

  try {
    const response = await fetch(
      `${baseURL}/characters?apikey=${publicKey}&ts=${ts}&limit=${limit}&hash=${hash}&nameStartsWith=${query}`,
    );
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error("Error searching Marvel characters:", error);
    return [];
  }
};

export const getCharacterComics = async (characterId: number) => {
  const ts = Date.now().toString();
  const limit = 20;
  const hash = MD5(ts + privateKey + publicKey);

  try {
    const response = await fetch(
      `${baseURL}/characters/${characterId}/comics?apikey=${publicKey}&ts=${ts}&limit=${limit}&hash=${hash}`,
    );
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error("Error fetching character comics:", error);
    return [];
  }
};
