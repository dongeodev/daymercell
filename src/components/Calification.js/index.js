import React from "react"
import { Container } from "./styles"
import { CalificationCard } from "../CalificationCard"
import avatar1 from "../../images/avatar1.svg"
import avatar2 from "../../images/avatar2.svg"
import avatar3 from "../../images/avatar3.svg"
import avatar4 from "../../images/avatar4.svg"

export const Calification = () => {
  return (
    <Container>
      <CalificationCard
        avatar={avatar1}
        review='"Reparo mi iphone X, lo ame"'
        name="Cata Restrepo"
      />
      <CalificationCard
        avatar={avatar2}
        review='"Excelente servicio"'
        name="Jhojan Perez"
      />
      <CalificationCard
        avatar={avatar3}
        review='"100% Recomendado, Persona muy honesta"'
        name="Patricia Acosta"
      />
      <CalificationCard
        avatar={avatar4}
        review='"Reparo mi celular y el xbox de mi hijo"'
        name="Ricardo Castaño"
      />
    </Container>
  )
}
