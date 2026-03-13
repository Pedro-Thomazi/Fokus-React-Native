import FocusButton from '@/components/FokusButton/FocusButton'
import { Link, router } from 'expo-router'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Logo.png")} />
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua{"\n"} produtividade,{"\n"}
          <Text style={styles.titleSecondy}>mergulhe no que{"\n"} importa</Text>
        </Text>

        <Image source={require("../assets/images/telaInicial.png")} />
        <FocusButton title='Quero iniciar!' onPress={() => router.replace("/pomodoro")} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    backgroundColor: "#021123"
  },
  inner: {
    gap: 16
  },
  title: {
    textAlign: "center",
    color: "#98a0a8",
    fontSize: 26
  },
  titleSecondy: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold"
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

export default index