import styled from "styled-components";

export const ArtistsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1000px) {
    height: 1600px;
  }

  @media screen and (max-width: 480px) {
    height: 1700px;
  }
`;

export const ArtistsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  /* padding: 0 50px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ArtistsCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 600px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 1019px) {
    max-height: 350px;
  }
`;

export const ArtistsIcon = styled.img`
  height: 240px;
  width: 240px;
  margin-bottom: 10px;
`;

export const ArtistsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 60px;
  margin-top: -60px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

export const ArtistsH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #fff;
`;

export const ArtistsP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;

export const ArtistsMore = styled.div`
  margin-top: 60px;
  margin-bottom: -40px;
  /* max-width: 1000px; */
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 60px;
  padding: 0 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const ArtistsH3 = styled.h3`
  font-size: 1rem;
  margin-bottom: 16px;
  color: #fff;
  cursor: context-menu;
  text-align: center;
  &:hover {
    transform: scale(1.4);
    transition: all 0.2s ease-in-out;
    color: #01bf71;
  }

  @media screen and (max-width: 1200px) {
    font-size: 0.8rem;
  }
`;
