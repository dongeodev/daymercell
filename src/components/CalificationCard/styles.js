import styled, { css } from "styled-components"
import { colors, fadeIn } from "../styles/animation"

export const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 71px 1fr;
  /* width: 96%; */
  padding-top: 10px;
  padding-bottom: 10px;
  height: fit-content;
  min-height: 68px;
  border-radius: 8px;
  background: ${colors.gray};
  justify-items: center;
  box-shadow: 2px 2px 2px 1px rgba(99, 58, 130, 0.4);
  ${(props) =>
    props.show &&
    css`
      ${fadeIn()}
    `}
  :hover {
    border: 1px solid ${colors.primary};
  }
`

export const Avatar = styled.img`
  margin: 0;
  justify-self: end;
  align-self: center;
`
export const Review = styled.div`
  align-self: center;
  justify-self: start;
  margin-left: 10px;

  & p {
    margin: 0;
  }
`
export const Text = styled.p`
  font-family: Roboto;
  font-style: italic;
  font-size: 14px;
`
export const TextName = styled.p`
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 12px;
`
