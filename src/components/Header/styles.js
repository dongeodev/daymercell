import styled, { keyframes } from "styled-components"
import DevBroken from "../../images/device1.svg"
import DevRepaired from "../../images/device2.svg"

export const colors = {
  primary: "#40E0D0",
  secundary: "#2BBDE1",
  third: "#72B5B7",
  acent: "#633A82",
  light: "#F1FCFC",
  gray: "#E6ECEC",
}

const GoDown = keyframes`
from{
  transform: translateY(10px);
}
50%{
  transform: translateY(4px);
}
to{
  transform: translateY(10px)
}
`
export const GoRight = keyframes`
from{
  transform: translateX(-45px);
}
to{
  transform: translateX(0px)
}
`
export const GoLeft = keyframes`
from{
  transform: translateX(45px);
  /* transform: rotate(180deg); */
}
to{
  transform: translateX(0px)
}
`
const GoRote = keyframes`
from{
  transform: rotateY(0);
  /* transform: rotate(180deg); */
}
to{
  transform: rotateY(360deg);
  background-image:url(${DevRepaired});
}
`

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
  animation: ${GoRight} 0.5s ease;
`
export const Texture2 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  animation: ${GoLeft} 0.5s ease;
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
  align-self: start;
  justify-self: center;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const LogoHero = styled.div`
  margin-bottom: 20px;
  /* width: 110px; */
  height: 95px;
  background-position-x: 15px;
  background-image: url(${DevBroken});
  background-repeat: no-repeat;
  animation: ${GoRote} 1s ease-in forwards;
`
export const Button = styled.button`
  min-width: 146px;
  height: 32px;
  background: ${colors.acent};
  color: ${colors.light};
  font-family: Roboto;
  font-size: 14px;
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  box-shadow: 0 3px 6px 0px rgba(99, 58, 130, 0.4);
  :hover {
    font-weight: bold;
  }
`

export const ArrowIcon = styled.img`
  margin-top: 9px;
  animation: ${GoDown} 1s ease-in infinite;
`
