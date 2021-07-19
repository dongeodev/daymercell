import React, { useRef, useState, useEffect } from "react"
import daymer from "../../images/daymer.svg"
import lab from "../../images/lab.svg"
import { Container, ImgContainer, Lab, Img, NewContainer } from "./styles"

export const Profile = () => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        console.log("se ve el profile")
        observer.disconnect()
      }
    })

    observer.observe(ref.current)
  }, [ref])
  return (
    <NewContainer>
      <Container ref={ref} show={show}>
        {show && (
          <>
            <ImgContainer>
              <img src={daymer} />
            </ImgContainer>
            <div>
              <Lab>
                <p>Reparamos</p>
                <p>todas las marcas!</p>
              </Lab>
              <Img src={lab} />
            </div>
          </>
        )}
      </Container>
    </NewContainer>
  )
}
