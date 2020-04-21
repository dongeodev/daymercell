import styled from "styled-components"
import { colors } from "../Header/styles"

export const Card = styled.div`
  display: grid;
  grid-template-columns: 72px minmax(100px, 200px);
  grid-template-rows: 1fr;
  height: 72px;
  color: ${colors.acent};
  font-family: Roboto, Sistem-UI;
  font-weight: bold;
  font-size: 18px;
  grid-column-gap: 5px;
  & img {
    margin: 0;
  }
  @media only screen and (max-width: 360px) {
    grid-template-columns: 72px 100px;
  }
`

export const MiniCard = styled.div`
  border: 1px solid ${colors.acent};
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 3px 6px 0px rgba(99, 58, 130, 0.4);
  & p {
    margin: 0;
    margin-top: 5px;
    margin-bottom: 3px;
  }
`
export const P = styled.p`
  align-self: center;
  margin-bottom: 0;
  margin-left: 5px;
`
