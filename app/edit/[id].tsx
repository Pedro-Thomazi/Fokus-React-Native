import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { IconSave } from '@/components/Icon/Icon'
import { useAuthContext } from '@/components/Context/TaskProvider'

const EditTask = () => {
  const { id } = useLocalSearchParams()
  const idNumber = +id
  const { tasks, updateTask } = useAuthContext()
  const task = tasks.find(item => item.id == idNumber)
  const [description, setDescription] = useState<string>()

  useEffect(() => {
    if (tasks) {
      setDescription(task?.description)
    }
  }, [task])

  function submitTask() {
    if (!description) return

    updateTask(idNumber, description)
    setDescription("")
    router.navigate("/tasks/Tasks")
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>Modificar tarefa</Text>
          <TextInput style={styles.input}
            numberOfLines={10}
            multiline={true}
            value={description}
            onChangeText={setDescription} />
          <Pressable style={styles.button} onPress={submitTask}>
            <IconSave />
            <Text>Salvar</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default EditTask

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    gap: 16,
    alignItems: "center"
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 26
  },
  inner: {
    backgroundColor: "#98a0a8",
    width: "90%",
    borderRadius: 8,
    padding: 16,
    gap: 32
  },
  label: {
    fontWeight: 600,
    fontSize: 18
  },
  input: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    height: 100
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    alignSelf: "flex-end"
  }
})