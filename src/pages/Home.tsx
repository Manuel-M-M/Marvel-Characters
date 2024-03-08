import React from "react";
import CharacterList from "../components/CharacterList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 84px;
  gap: 24px;
  padding: 48px 0px;
`;

const Home: React.FC = () => {
  console.log("Home");

  return (
    <HomeContainer data-testid="home-container">
      <Header />
      <Main>
        <SearchBar />
        <CharacterList />
      </Main>
    </HomeContainer>
  );
};

export default Home;
