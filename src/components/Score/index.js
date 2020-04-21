import React from "react"
import { Rate } from "../Rate"
import { Container } from "./styles"
import tools from "../../images/1.svg"
import experience from "../../images/2.svg"
import client from "../../images/3.svg"

export const Score = () => {
  return (
    <Container>
      <Rate
        number="2497"
        icon={tools}
        description="Dispositivos Reparados"
      />
      <Rate
        number="15"
        icon={experience}
        description="Años de Experiencia"
      />
      <Rate
        number="98"
        simbol={true}
        icon={client}
        description="Clientes Satisfechos"
      />
    </Container>
  )
}
