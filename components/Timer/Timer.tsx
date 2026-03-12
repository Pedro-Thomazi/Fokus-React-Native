import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface DataTimer {
  seconds: number
}

const Timer = ({ seconds }: DataTimer) => {

  const date = new Date(seconds * 1000)
  const options = { minute: "2-digit", second: "2-digit" }

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-br", options)}
    </Text>
  )
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center"
  }
})

export default Timer