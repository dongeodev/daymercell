import React, { useState, useEffect, useRef } from "react"

import { Card, MiniCard, P } from "./styles"

export const Rate = ({ number, icon, description, simbol }) => {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  const ref = useRef(null)
  useEffect(() => {
    let inc = 1
    switch (number) {
      case "3497":
        inc = 13
        break
      case "15":
        inc = 1
        break
      case "98":
        inc = 1
        break

      default:
        inc = 1
    }
    if (count < number) {
      setTimeout(() => {
        setCount(count + inc)
      }, 15)
    }

    return clearTimeout
  }, [count])

  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)

        observer.disconnect()
      }
    })

    observer.observe(ref.current)
  }, [ref])

  return (
    <Card ref={ref}>
      {show && (
        <>
          <MiniCard>
            <p>{`${count}${simbol ? "%" : ""}`}</p>
            <img src={icon} />
          </MiniCard>
          <P>{description}</P>
        </>
      )}
    </Card>
  )
}
