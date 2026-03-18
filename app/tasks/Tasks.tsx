import { useAuthContext } from '@/components/Context/TaskProvider'
import FocusButton from '@/components/FokusButton/FocusButton'
import { IconPlay, IconPlus } from '@/components/Icon/Icon'
import TaskItem from '@/components/TaskItem/TaskItem'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const Tasks = () => {
  const { tasks, deleteTask, toggleTaskCompleted } = useAuthContext()

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          {/* {tasks.map((t) => (
            <TaskItem key={t.id} completed={t.completed} text={t.description} />
          ))} */}
          <FlatList
            data={tasks}
            renderItem={({ item }) => <TaskItem completed={item.completed} 
            text={item.description}
            onPressDelete={() => deleteTask(item.id)} 
            onPressEdit={() => router.navigate(`/edit/${item.id}`)} 
            onToggleComplete={() => toggleTaskCompleted(item.id)} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{height: 8}} />}
            ListHeaderComponent={<Text style={styles.text}>Listar de taréfas</Text>}
            ListFooterComponent={<View style={{marginTop: 16}}><FocusButton outline title='Adicionar nova taréfa' onPress={() => router.navigate("/addTask/AddTask")} icon={<IconPlus />} /></View>}
          />
        </View>
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
    fontSize: 26,
    marginBottom: 16
  },
  inner: {
    gap: 8
  }
})

export default Tasks