import React from "react";
import icon1 from "../../images/rihana.png";
import icon2 from "../../images/sickik.jpg";
import icon3 from "../../images/tyga.jpg";
import {
  ArtistsContainer,
  ArtistsH1,
  ArtistsCard,
  ArtistsWrapper,
  ArtistsIcon,
  ArtistsH2,
  ArtistsH3,
  ArtistsMore,
} from "./ArtistsElements";
const Artists = () => {
  return (
    <ArtistsContainer id="artists">
      <ArtistsH1> Already announced artists </ArtistsH1>
      <ArtistsWrapper>
        <ArtistsCard>
          <ArtistsIcon src={icon1} />
          <ArtistsH2> RIHANA</ArtistsH2>
        </ArtistsCard>
        <ArtistsCard>
          <ArtistsIcon src={icon2} />
          <ArtistsH2> SICKICK </ArtistsH2>
        </ArtistsCard>
        <ArtistsCard>
          <ArtistsIcon src={icon3} />
          <ArtistsH2> TYGA</ArtistsH2>
        </ArtistsCard>
      </ArtistsWrapper>
      <ArtistsMore>
        <ArtistsH3> THE WEEKEND</ArtistsH3> <ArtistsH3> MACANACHE</ArtistsH3>{" "}
        <ArtistsH3> SPIKE</ArtistsH3> <ArtistsH3> FUEGO</ArtistsH3>
        <ArtistsH3> E40 </ArtistsH3> <ArtistsH3> BIGGIE</ArtistsH3>{" "}
        <ArtistsH3> ANSAMBLUL CIOCARLIA</ArtistsH3>{" "}
        <ArtistsH3> EMINEM</ArtistsH3>
      </ArtistsMore>
    </ArtistsContainer>
  );
};

export default Artists;
