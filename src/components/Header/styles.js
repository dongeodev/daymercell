import styled, { keyframes, css } from "styled-components"
import DevBroken from "../../images/device1.svg"
import { GoRight } from "../styles/animation"
import { GoLeft } from "../styles/animation"
import { GoDown } from "../styles/animation"
import { GoRote } from "../styles/animation"
import { colors } from "../styles/animation"

export const Container = styled.header`
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-column: 1fr;
  height: 300px;
  width: 100%;
  position: relative;
  background-image: linear-gradient(45deg, #2bbde1, #36d0d8, #40e0d0);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 15vw));
  transform: translateZ(15px);
  @media only screen and (min-width: 560px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  }
`

export const Texture = styled.img`
  position: absolute;
  top: 52px;
  left: 0;
  ${(props) =>
    props.start &&
    css`
       {
        ${GoRight()}
      }
    `}
`
export const Texture2 = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  ${(props) =>
    props.start &&
    css`
       {
        ${GoLeft()}
      }
    `}
`
export const LogoContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: start;
  padding-left: 18px;
`

export const Logo = styled.img`
  max-width: 30px;
  max-height: 30px;
  color: #633a82;
  margin: 0;
  margin-right: 2px;
`

export const Name = styled.p`
  color: #633a82;
  margin: 0;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 900;
  font-style: italic;
`

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
export const LogoHero = styled.div`
  margin-bottom: 20px;
  width: 140px;
  height: 95px;
  background-position-x: 15px;
  background-image: url(${DevBroken});
  background-repeat: no-repeat;
  ${(props) =>
    props.start &&
    css`
       {
        ${GoRote()}
      }
    `}
`
export const Button = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 32px;
  padding: 10px;
  background: ${colors.acent};
  color: ${colors.light};
  font-family: Roboto;
  font-size: 14px;
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  box-shadow: 0 3px 6px 0px rgba(99, 58, 130, 0.4);
`

export const ArrowIcon = styled.img`
  margin-top: 9px;
  ${GoDown()}
`
