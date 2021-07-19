import styled, { keyframes, css } from "styled-components"
import { dotLoading } from "../styles/animation"

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LogoLoader = styled.img`
  width: 150px;
  height: 150px;
  color: #633a82;
  margin: 0;
  margin-right: 2px;
`
export const ContainerLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #633a82;
  margin-right: 20px;

  &.dot:last-child {
    margin: 0;
  }
  &.l1 {
    ${dotLoading()}
  }
  &.l2 {
    ${dotLoading({ delay: "0.2s" })}
  }
  &.l3 {
    ${dotLoading({ delay: "0.5s" })}
  }
`
