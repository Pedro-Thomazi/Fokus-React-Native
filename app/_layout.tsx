import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
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
        <Drawer.Screen name='index' options={{headerShown: false, drawerItemStyle: {display: "none"}}} />
        <Drawer.Screen name='addTask/AddTask' options={{drawerItemStyle: {display: "none"}}} />
        <Drawer.Screen name='pomodoro' options={{drawerLabel: "Timer", title: ""}} />
        <Drawer.Screen name='tasks/Tasks' options={{drawerLabel: "Lista de taréfas", title: ""}} />
      </Drawer>
    </GestureHandlerRootView>
  );
}