import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../images/logo.png"
import DevBroken from "../../images/device1.svg"
import DevRepaired from "../../images/device2.svg"
import arrowRight from "../../images/arrowright.svg"
import arrowLeft from "../../images/arrowleft.svg"
import iconArrow from "../../images/arrow_icon.svg"

import {
  Container,
  Texture,
  Texture2,
  LogoContainer,
  Logo,
  Name,
  Hero,
  LogoHero,
  Button,
  ArrowIcon,
} from "./styles"

const Header = ({ siteTitle }) => (
  <Container>
    <Texture src={arrowRight} />
    <Texture2 src={arrowLeft} />
    <LogoContainer>
      <Logo src={logo} />
      <Name>DaymerCell</Name>
    </LogoContainer>
    <Hero>
      <LogoHero />
      <Button>Necesitas un Tecnico?</Button>
      <ArrowIcon src={iconArrow} />
    </Hero>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
