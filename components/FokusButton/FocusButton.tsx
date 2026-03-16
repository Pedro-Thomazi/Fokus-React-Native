import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { BooleanProp } from 'react-native-svg'

interface DataProp {
  outline: boolean
  title: string
  icon: any
  onPress: () => void
}

const FocusButton = ({ outline, title, icon, onPress }: DataProp) => {
  return (
    <Pressable style={[styles.button, outline && styles.outilineButton]} onPress={onPress}>
      {icon}
      <Text style={[styles.buttonText, outline && styles.outilineButtonText]}>{title}</Text>
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
  outilineButton: {
    backgroundColor: "transparent",
    borderColor: "#b872ff",
    borderWidth: 2
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
  },
  outilineButtonText: {
    color: "#b872ff"
  },
})

export default FocusButton