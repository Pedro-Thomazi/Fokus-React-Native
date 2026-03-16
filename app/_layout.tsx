import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TaskProvider } from '@/components/Context/TaskProvider';

export default function Layout() {
  return (
    <TaskProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={{
          headerStyle: {
            backgroundColor: "#021123"
          },
          headerTintColor: "#fff",
          drawerStyle: {
            backgroundColor: "#021123"
          },
          drawerLabelStyle: {
            color: "#fff"
          }
        }}>
          <Drawer.Screen name='index' options={{ headerShown: false, drawerItemStyle: { display: "none" } }} />
          <Drawer.Screen name='addTask/AddTask' options={
            {
              drawerItemStyle:
                { display: "none" },
              title: "",
              headerLeft: () => {
                return <Ionicons
                name='arrow-back'
                size={24}
                color="#fff"
                style={{ marginLeft: 16 }}
                onPress={() => router.navigate("/tasks/Tasks")} />
              }
            }
          } />
          <Drawer.Screen name='pomodoro' options={{ drawerLabel: "Timer", title: "" }} />
          <Drawer.Screen name='tasks/Tasks' options={{ drawerLabel: "Lista de taréfas", title: "" }} />
        </Drawer>
      </GestureHandlerRootView>
    </TaskProvider>
  );
}