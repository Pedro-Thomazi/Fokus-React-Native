import TaskItem from '@/components/TaskItem/TaskItem'
import React from 'react'
import { Text, View } from 'react-native'

const Tasks = () => {
  return (
    <View>
      <Text>Listar taréfas</Text>
      <TaskItem completed={true} text='Estudar' />
      <TaskItem completed={false} text='Mijar' />
    </View>
  )
}

export default Tasks