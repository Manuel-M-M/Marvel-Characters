import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Comic } from "../utils/types";
import { getCharacterComics } from "../context/apiMethods";

interface ComicListProps {
  characterId: number | null;
}

const ComicListContainer = styled.div`
  height: 526.8px;
  display: flex;
  justify-content: center;
  top: 403.94px;
  padding: 0px 48px;
`;

const Content = styled.div`
  width: 100%; /* Ancho del 100% para que sea responsive */
  max-width: 960px; /* Tamaño máximo definido */
  height: 526.8px;
  padding: 48px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h3`
  width: 960px;
  height: 38px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 37.5px;
  color: #000000;
`;

const ComicCardListWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 10px !important;
    height: 4px !important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ec1d24 !important;
    border-radius: 20px !important;
    border: none !important;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #d9d9d9 !important;
  }
`;

const ComicCardList = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
`;

const ComicCard = styled.div`
  flex: 0 0 auto;
  height: 340.8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ComicImage = styled.img`
  width: 179.2px;
  height: 268.8px;
`;

const ComicDescriptionWrapper = styled.div`
  width: 179.2px;
  height: 60px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  color: #000000;
`;

const ComicList: React.FC<ComicListProps> = ({ characterId }) => {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    if (characterId) {
      getCharacterComics(characterId)
        .then((comics) => setComics(comics))
        .catch((error) =>
          console.error("Error fetching character comics:", error),
        );
    }
  }, [characterId]);

  const separateTitleAndDate = (title: string): [string, string] => {
    const cleanTitle = title.replace(/\([^)]*\)/g, "").trim();
    const match = title.match(/\(([^)]+)\)/);
    const date = match ? match[1] : "";
    return [cleanTitle.trim(), date.trim()];
  };

  return (
    <ComicListContainer>
      <Content>
        <Title>COMICS</Title>
        <ComicCardListWrapper>
          <ComicCardList>
            {comics.map((comic: Comic) => {
              const [comicName, comicDate] = separateTitleAndDate(comic.title);
              return (
                <ComicCard key={comic.id}>
                  <ComicImage
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                  />
                  <ComicDescriptionWrapper>
                    {comicName} {<br />} {comicDate}
                  </ComicDescriptionWrapper>
                </ComicCard>
              );
            })}
          </ComicCardList>
        </ComicCardListWrapper>
      </Content>
    </ComicListContainer>
  );
};

export default ComicList;
