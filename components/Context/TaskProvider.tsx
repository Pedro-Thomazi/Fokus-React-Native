import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, ReactNode, useContext, useState } from 'react'

interface AuthContextType {
  tasks: TaskProp[]
  addTask: (description: string) => void
  toggleTaskCompleted: (id: number) => void
  deleteTask: (id: number) => void
}

interface TaskProp {
  id: number
  description: string
  completed: boolean
}

const [tasks, setTasks] = useState<TaskProp[]>([])

function addTask(description: string) {
  setTasks(oldState => {
    return [
      ...oldState,
      {
        description,
        completed: false,
        id: oldState.length + 1
      }
    ]
  })
}

const toggleTaskCompleted = (id: number) => {
  setTasks(oldState => {
    return oldState.map(t => {
      if (t.id == id) {
        t.completed = !t.completed
      }
      return t
    })
  })
}

const deleteTask = (id: number) => {
  setTasks(oldState => {
    return oldState.filter(t => t.id != id)
  })
}


export const TaskContext = createContext<AuthContextType | undefined>(undefined)

function TaskProvider ({ children }: { children: ReactNode }) {

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskCompleted, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

function useAuthContext() {
  const context = useContext(TaskContext)
  if (!context) throw new Error("Erro no useAuthContext.")

  return context
}

export {
  TaskProvider,
  useAuthContext
}