import React, { useState } from "react";
import Video from "../../vedios/home_vedio.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { useTypewriter } from "react-simple-typewriter";
import { Box } from "@chakra-ui/react";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const [text] = useTypewriter({
    words: ["a Web Developer!", "an IT Enthusiast!"],
    loop: 0,
  });
  return (
    <Box height="100%">
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>I'm Milan Pandey, </HeroH1>
          <HeroH1>I'm {text}</HeroH1>
          <HeroP>Click here to know more about me</HeroP>
          <HeroBtnWrapper>
            <Button
              to="about"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Lets Go..!
              {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </Box>
  );
};

export default HeroSection;
