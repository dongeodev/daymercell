import PropTypes from "prop-types"
import React from "react"

import arrowRight from "../../images/arrowright.svg"
import arrowLeft from "../../images/arrowleft.svg"
import face from "../../images/face.svg"
import ig from "../../images/ig.svg"
import youtube from "../../images/youtube.svg"

import {
  Container,
  Texture,
  Texture2,
  Text,
  TextContainer,
  IconContainer,
} from "./styles"

export const Footer = () => (
  <Container>
    <Texture src={arrowRight} />
    <Texture2 src={arrowLeft} />
    <TextContainer>
      <Text>Ubicacion: Cra 95 #45-78 Bogota</Text>
      <Text>Telefono: 319 355 53 85</Text>
    </TextContainer>
    <IconContainer>
      <a>
        <img src={face} />
      </a>
      <a>
        <img src={ig} />
      </a>
      <a>
        <img src={youtube} />
      </a>
    </IconContainer>
  </Container>
)
