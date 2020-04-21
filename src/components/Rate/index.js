import React, { useState, useEffect } from "react"

import { Card, MiniCard, P } from "./styles"

export const Rate = ({ number, icon, description, simbol }) => {
  const [count, setCount] = useState(1)

  useEffect(function () {
    for (let i = 0; i < number; i + 2) {
      setCount(i)
    }
  }, [])

  return (
    <Card>
      <MiniCard>
        <p>{`${count}${simbol ? "%" : ""}`}</p>
        <img src={icon} />
      </MiniCard>
      <P>{description}</P>
    </Card>
  )
}
