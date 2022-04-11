import React from "react"
//Styled Component
import { Container, Flex } from "../../styles/globalStyles"
import {
  FooterNav,
  FooterContent,
  FooterSocial,
} from "../../styles/FooteStyles"
//Icons
import { Instagram, Facebook, Vimeo } from "../../assets/svg/social-icons"

const Footer = ({ onCursor }) => {
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>912.2345.678</p>
            <p>info@your.studio</p>
          </FooterContent>
          <FooterContent wider>
            <p>15 Cat at Unit Z</p>
            <p>University, PE C32 0E2</p>
          </FooterContent>
          <FooterSocial>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="/"
            >
              <Instagram />
            </a>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="/"
            >
              <Facebook />
            </a>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="/"
            >
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
