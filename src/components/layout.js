import React from "react"
import PropTypes from "prop-types"
import Whatsapp from "../images/whatsapp.svg"
import Header from "./Header"
import "./layout.css"
import styled from "styled-components"

const ContainerFrime = styled.div`
  position: relative;
  width: 100%;
`
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  @media (min-width: 550px) {
    max-width: 375px;
    height: 90vh;
    border: 10px solid black;
    border-radius: 25px;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background-color: #fff;
    box-shadow: 6px 6px 7px 1px rgb(0 0 0 / 35%);

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: #633a82;
      border-radius: 10px;
    }
  }
`
const Icon = styled.a`
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity ease 0.2s;
  z-index: 10000;
  &:hover {
    opacity: 1;
  }
`
const Notch = styled.div`
  display: none;
  position: absolute;
  right: calc(50% - 60px);
  top: 0;
  width: 120px;
  height: 4.25vh;
  background-color: #111;
  border-bottom-left-radius: 2.334vh;
  border-bottom-right-radius: 2.334vh;
  z-index: 10;
  @media (min-width: 550px) {
    display: block;
  }
`

const Layout = ({ children, title }) => {
  return (
    <ContainerFrime>
      <Notch></Notch>

      <Container>
        <Icon
          href="https://api.whatsapp.com/send?phone=573193555385"
          target="_blank"
        >
          <img src={Whatsapp} />
        </Icon>
        <Header siteTitle={title} />
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with Gatsby by
            <a href="https://www.dongeo.dev/">@DonGeoDev</a>
          </footer>
        </div>
      </Container>
    </ContainerFrime>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
