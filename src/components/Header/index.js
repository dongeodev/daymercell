import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import logo from "../../images/logo.png"
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

const Header = ({ siteTitle }) => {
  const [animation, setAnimation] = useState(false)
  useEffect(() => {
    setAnimation(true)
  }, [animation])

  return (
    <Container>
      <Texture src={arrowRight} start={animation} />
      <Texture2 src={arrowLeft} start={animation} />
      <LogoContainer>
        <Logo src={logo} />
        <Name>DaymerCell</Name>
      </LogoContainer>
      <Hero>
        <LogoHero start={animation} />
        <Button>El mejor servicio Tecnico</Button>
        <ArrowIcon src={iconArrow} />
      </Hero>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
