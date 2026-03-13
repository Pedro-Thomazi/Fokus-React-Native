import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconCheck, IconPencil, IconTrash } from '../Icon/Icon'

interface TaskProps {
  completed: boolean
  text: string
  onToggleComplete: () => void
  onPressEdit: () => void
  onPressDelete: () => void
}

const TaskItem = ({ completed, text, onToggleComplete, onPressEdit, onPressDelete }: TaskProps) => {
  return (
    <View style={styles.card}>
      <Pressable onPress={onToggleComplete}>
        <IconCheck checked={completed} />
      </Pressable>

      <Text style={styles.text}>{text}</Text>

      <Pressable onPress={onPressEdit}>
        <IconPencil />
      </Pressable>

      <Pressable onPress={onPressDelete}>
        <IconTrash />
      </Pressable>
    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#98a0a8",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
    gap: 8
  },
  text: {
    flex: 1,
    color: "#021123",
    fontSize: 18,
    fontWeight: "bold"
  }
})