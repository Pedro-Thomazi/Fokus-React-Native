import ActionButton from "@/components/ActionButton/ActionButton";
import FocusButton from "@/components/FokusButton/FocusButton";
import Timer from "@/components/Timer/Timer";
import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IconPause, IconPlay } from "../components/Icon/Icon";

interface DataPomodoro {
  id: string
  initialValue: number
  image: any
  display: string
}

export default function Pomodoro() {
  const pomodoro = [
    { id: "focus", initialValue: 25 * 60, image: require("../assets/images/foco.png"), display: "Foco" },
    { id: "short", initialValue: 5 * 60, image: require("../assets/images/short.png"), display: "Pausa Curta" },
    { id: "long", initialValue: 15 * 60, image: require("../assets/images/long.png"), display: "Pausa Longa" },
  ]

  const [timerType, setTimerType] = useState<DataPomodoro>(pomodoro[0])
  const [seconds, setSeconds] = useState<number>(pomodoro[0].initialValue)
  const [timerRunning, setTimerRunning] = useState(false)
  const timerRef = useRef(0)

  function clear() {
    if (timerRef.current != 0) {
      clearInterval(timerRef.current)
      timerRef.current = 0
      setTimerRunning(false)
    }
  }

  function toggleTimerType(newTimerType: DataPomodoro) {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()
  }

  function toggleTimer() {
    if (timerRef.current) {
      clear()
      return
    }

    setTimerRunning(true)

    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear()
          return timerType.initialValue
        }
        return oldState - 1
      })
      // console.log("Timer rolando")
    }, 1000)
    timerRef.current = id
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => (
            <ActionButton key={p.id} active={timerType.id === p.id} display={p.display} onPress={() => toggleTimerType(p)} />
          ))}
        </View>
        <Timer seconds={seconds} />
        <FocusButton
          title={timerRunning ? "Pausar" : "Começar"}
          // icon={timerRunning ? <IconPause /> : <IconPlay />} 
          onPress={toggleTimer} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Lorem ipsum consectetur adipisicing elit.</Text>
        <Text style={styles.textFooter}>Inventore quasi laudantium cupiditate.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,

    backgroundColor: "#021123"
  },
  image: {
    objectFit: "cover"
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    gap: 32,
    borderColor: "#144480"
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  footer: {
    width: "80%"
  },
  textFooter: {
    textAlign: "center",
    color: "#98a0a8",
    fontSize: 12.5
  }
})