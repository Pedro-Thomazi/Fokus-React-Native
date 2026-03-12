import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface DataActionButton {
  active: boolean,
  onPress: any,
  display: string
}

const ActionButton = ({active, onPress, display}: DataActionButton) => {
  return (
    <Pressable onPress={onPress} style={active ? styles.contextButtonActive : null}>
      <Text style={styles.contextButtonText}>{display}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8
  },
  contextButtonText: {
    fontSize: 12.5,
    color: "#fff",
    padding: 8
  }
})

export default ActionButton