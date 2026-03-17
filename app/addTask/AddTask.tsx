import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconSave } from '@/components/Icon/Icon'
import { router } from 'expo-router'
import { useAuthContext } from '@/components/Context/TaskProvider'

const AddTask = () => {
  const [description, setDescription] = useState<string>()
  const { addTask } = useAuthContext()

  function submitTask() {
    if (!description) return

    addTask(description)
    setDescription("")
    router.navigate("/tasks/Tasks")
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>Adicionar tarefa</Text>
          <Text style={styles.label}>Em que você está pensando?</Text>
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

export default AddTask

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