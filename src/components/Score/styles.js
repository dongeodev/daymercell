import styled, { keyframes } from "styled-components"
import arrows from "../../images/arrows.svg"
import { GoRight } from "../Header/styles"

export const Container = styled.section`
  width: 100%;
  /* padding: 0 15%; */
  display: grid;
  grid-template-rows: repeat(3, 72px);
  grid-template-columns: 1fr;
  grid-gap: 5px;
  margin: 65px 0;
  justify-items: center;
  background-image: url(${arrows});
  background-repeat: no-repeat;
  animation: ${GoRight} 1s ease forwards;
`
