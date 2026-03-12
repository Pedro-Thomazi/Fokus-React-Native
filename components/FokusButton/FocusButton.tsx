import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface DataProp {
  title: string
  // icon: any
  onPress: () => void
}

const FocusButton = ({title, onPress}: DataProp) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#b872ff",
    padding: 8,
    borderRadius: 32,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
  }
})

export default FocusButton