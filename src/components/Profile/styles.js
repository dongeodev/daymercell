import styled from "styled-components"
import { colors } from "../Header/styles"

export const NewContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(45deg, #00cccc, #034f91);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  /* padding: 0 6%; */
`
export const Container = styled.section`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
  height: 250px;
  justify-items: center;
`
export const ImgContainer = styled.div`
  justify-self: start;
  & img {
    margin-top: 42px;
    border-radius: 50%;
    box-shadow: 0 3px 6px 0px rgba(99, 58, 130, 0.4);
  }
`
export const Lab = styled.div`
  /* justify-self: center; */
  margin: 37px 0 8px 0;
  & p {
    color: ${colors.light};
    font-size: 20px;
    font-family: Roboto;
    margin: 0;
  }
`
export const Img = styled.img`
  box-shadow: 0 3px 6px 0px rgba(99, 58, 130, 0.4);
  border-radius: 8px;
`
