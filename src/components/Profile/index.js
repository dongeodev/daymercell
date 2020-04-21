import React from "react"
import daymer from "../../images/daymer.svg"
import lab from "../../images/lab.svg"
import { Container, ImgContainer, Lab, Img, NewContainer } from "./styles"

export const Profile = () => {
  return (
    <NewContainer>
      <Container>
        <ImgContainer>
          <img src={daymer} />
        </ImgContainer>
        <div>
          <Lab>
            <p>Reparamos</p>
            <p>todas las marcas!</p>
          </Lab>
          <Img src={lab} />
        </div>
      </Container>
    </NewContainer>
  )
}
