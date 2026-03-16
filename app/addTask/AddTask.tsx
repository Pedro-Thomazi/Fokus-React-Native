import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconSave } from '@/components/Icon/Icon'

const AddTask = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>Adicionar tarefa</Text>
          <Text style={styles.label}>Em que você está pensando?</Text>
          <TextInput style={styles.input} numberOfLines={10} multiline={true} />
          <Pressable style={styles.button}>
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