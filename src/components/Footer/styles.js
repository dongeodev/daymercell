import styled from "styled-components"
import { colors } from "../Header/styles"
import { GoRight, GoLeft } from "../Header/styles"

export const Container = styled.header`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-column: 1fr;
  height: 300px;
  width: 100%;
  position: relative;
  background-image: linear-gradient(#72b5b7, #633a82);
  clip-path: polygon(0 0, 100% 15vw, 100% 100%, 0 100%);
  @media only screen and (min-width: 560px) {
    clip-path: polygon(0 0, 100% 5vw, 100% 100%, 0 100%);
  }
`
export const Texture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${GoRight} 0.5s ease;
`
export const Texture2 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  animation: ${GoLeft} 0.5s ease;
`
export const TextContainer = styled.div`
  /* align-self: center; */
  padding: 70px 0 0 20%;
`
export const Text = styled.p`
  font-family: Roboto;
  font-weight: 500;
  color: ${colors.light};
  font-size: 16px;
  margin: 0 0 10px 0;
`
export const IconContainer = styled.div`
  padding: 30px 0 0 20%;
  & img {
    margin-right: 35px;
    cursor: pointer;
  }
  & img:hover {
    border-bottom: 1px solid ${colors.primary};
  }
`
