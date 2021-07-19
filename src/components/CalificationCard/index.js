import React, { useEffect, useState, useRef } from "react"
import { Card, Avatar, Review, Text, TextName } from "./styles"

export const CalificationCard = ({ avatar, review, name }) => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        console.log("se ve el review")
        observer.disconnect()
      }
    })

    observer.observe(ref.current)
  }, [ref])
  return (
    <Card ref={ref} show={show}>
      {show && (
        <>
          <Avatar src={avatar} />
          <Review>
            <Text>{review}</Text>
            <TextName>{name}</TextName>
          </Review>
        </>
      )}
    </Card>
  )
}
