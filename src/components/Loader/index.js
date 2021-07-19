import React from "react"
import {
  LogoLoader,
  ContainerLoader,
  ContainerModal,
  Dot,
} from "../Loader/styles"
import logo from "../../images/logo.png"

export const Loader = () => {
  return (
    <ContainerModal>
      <LogoLoader src={logo} />
      <ContainerLoader>
        <Dot className="dot l1"></Dot>
        <Dot className="dot l2"></Dot>
        <Dot className="dot l3"></Dot>
      </ContainerLoader>
    </ContainerModal>
  )
}
