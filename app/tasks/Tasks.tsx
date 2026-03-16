import FocusButton from '@/components/FokusButton/FocusButton'
import { IconPlay, IconPlus } from '@/components/Icon/Icon'
import TaskItem from '@/components/TaskItem/TaskItem'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tasks = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Listar de taréfas</Text>
        <View style={styles.inner}>
          <TaskItem completed={true} text='Estudar' />
          <TaskItem completed={false} text='Mijar' />
        </View>
        <FocusButton outline title='Adicionar nova taréfa' onPress={() => router.navigate("/addTask/AddTask")} icon={<IconPlus />} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    alignItems: "center"
  },
  wrapper: {
    gap: 40,
    width: "90%"
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 26
  },
  inner: {
    gap: 8
  }
})

export default Tasks