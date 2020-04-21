import React from "react"
import { Card, Avatar, Review, Text, TextName } from "./styles"

export const CalificationCard = ({ avatar, review, name }) => {
  return (
    <Card>
      <Avatar src={avatar} />
      <Review>
        <Text>{review}</Text>
        <TextName>{name}</TextName>
      </Review>
    </Card>
  )
}
