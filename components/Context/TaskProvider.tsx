import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'


interface AuthContextType {
  tasks: TaskProp[]
  addTask: (description: string) => void
  updateTask: (id: number, newDescription: string) => void
  toggleTaskCompleted: (id: number) => void
  deleteTask: (id: number) => void
}

interface TaskProp {
  id: number
  description: string
  completed: boolean
}



const TaskContext = createContext<AuthContextType | undefined>(undefined)

function TaskProvider({ children }: { children: ReactNode }) {

  const [tasks, setTasks] = useState<TaskProp[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("fokus-task")
        const loadedData = jsonValue != null ? JSON.parse(jsonValue) : []
        setTasks(loadedData)
        setIsLoaded(true)
      } catch (error) {
        
      }
    }

    getData()
  }, [])

  useEffect(() => {

    const storeData = async (value: any) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem("fokus-task", jsonValue)
      } catch (error) {
        
      }
    }

    if (isLoaded) {
      storeData(tasks)
    }

  }, [tasks])

  function addTask(description: string) {
    setTasks(oldState => {
      const newTasks = [
        ...oldState,
        {
          description,
          completed: false,
          id: Date.now()
        }
      ]

      console.log("Novo estado:", newTasks)
      return newTasks
    })
  }

  const updateTask = (id: number, newDescription: string) => {
    setTasks(oldState => {
      return oldState.map(t => {
        if (t.id == id) {
          return { ...t, description: newDescription }
        }
        return t
      })
    })
  }

  const toggleTaskCompleted = (id: number) => {
    setTasks(oldState => {
      return oldState.map(t => {
        if (t.id == id) {
          return { ...t, completed: !t.completed }
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


  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, toggleTaskCompleted, deleteTask }}>
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
  TaskContext,
  TaskProvider,
  useAuthContext
}