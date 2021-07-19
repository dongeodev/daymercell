import PropTypes from "prop-types"
import React, { useState, useRef, useEffect } from "react"

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
  Text2,
  TextContainer,
  IconContainer,
  Img,
} from "./styles"

export const Footer = () => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })

    observer.observe(ref.current)
  }, [ref])
  return (
    <Container ref={ref}>
      {show && (
        <>
          <Texture src={arrowRight} show={show} />
          <Texture2 src={arrowLeft} show={show} />
          <TextContainer>
            <Text2>Contacto</Text2>
            <Text>Ubicacion: Cl 80 #81-31 Bogota</Text>
            <Text>Telefono: 319 355 53 85</Text>
          </TextContainer>
          <IconContainer>
            <a href="https://www.facebook.com/daymercity" target="_blank">
              <Img src={face} />
            </a>
            <a
              href="https://instagram.com/daymercity?igshid=w3iryep9yfwa"
              target="_blank"
            >
              <Img src={ig} />
            </a>
            <a
              href="https://www.youtube.com/channel/UClbbSJfE5zfk93TKFqok-Eg"
              target="_blank"
            >
              <Img src={youtube} />
            </a>
          </IconContainer>
        </>
      )}
    </Container>
  )
}
