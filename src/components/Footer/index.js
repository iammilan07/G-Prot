import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLink,
  FooterSocialLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Me</FooterLinkTitle>
              <FooterLink to="#home" exact="true">
                Home
              </FooterLink>
              <FooterLink to="#about" id={"about"} exact="true">
                About
              </FooterLink>
              <FooterLink to="#discover" id={"discover"} exact="true">
                Discover
              </FooterLink>
              <FooterLink to="#services" id={"services"} exact="true">
                Services
              </FooterLink>
              <FooterLink to="#gallery" id={"gallery"} exact="true">
                Gallery
              </FooterLink>
              <FooterLink to="/contact" id={"contact-form"} exact="true">
                Contact
              </FooterLink>
              <FooterLink to="#terms" id={"terms"} exact="true">
                Terms And Condition
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Touch With Me</FooterLinkTitle>
              <FooterSocialLink
                href="https://www.facebook.com/profile.php?id=100042295680045"
                target="_blank"
              >
                Facebook
              </FooterSocialLink>
              <FooterSocialLink
                href="//www.instagram.com/iammilan_7"
                target="_blank"
              >
                Instagram
              </FooterSocialLink>
              <FooterSocialLink
                href="https://www.linkedin.com/in/milan-pandey-606062179/"
                target="_blank"
              >
                Linkedin
              </FooterSocialLink>
              <FooterSocialLink
                href="https://twitter.com/Iammilan_07"
                target="_blank"
              >
                Twitter
              </FooterSocialLink>
              <FooterSocialLink
                href="https://github.com/iammilan07"
                target="_blank"
              >
                Github
              </FooterSocialLink>
              <FooterSocialLink
                href="https://www.youtube.com/channel/UC5FPRJilZwSeh-ddPP-V-uA"
                target="_blank"
              >
                YouTube
              </FooterSocialLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Milan Pandey
            </SocialLogo>
            <WebsiteRights>
              Milan Pandey © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/in/milan-pandey-606062179/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/iammilan_7"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/milan-pandey-606062179/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/Iammilan_07"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/iammilan07"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UC5FPRJilZwSeh-ddPP-V-uA"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
