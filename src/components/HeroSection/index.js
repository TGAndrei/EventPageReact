import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  BtnHeroWrapper,
  ArrowForward,
  ArrowRight,
  BtnLink,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroP> Are you ready for </HeroP>
        <HeroH1> zGeneration Festival?</HeroH1>
        <BtnHeroWrapper href="/tickets">
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            <BtnLink to="/tickets">
              Buy Tickets {hover ? <ArrowForward /> : <ArrowRight />}
            </BtnLink>
          </Button>
        </BtnHeroWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
