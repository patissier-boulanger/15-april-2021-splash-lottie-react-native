import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import splash from "./assets/splashWithout.png";
import LottieView from "lottie-react-native";

export default function App() {
  useEffect(() => {
    const prepare = async () => {
      SplashScreen.preventAutoHideAsync();
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 300);
    };

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={splash} style={styles.stretch} />
      <LottieView
        source={require("./assets/animation_knhnkiqs.json")}
        style={{
          position: "absolute",
          alignSelf: "center",
          width: 100,
          height: 100,
          backgroundColor: "#F2994A",
        }}
        autoPlay
        loop={false}
        speed={0.5}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  stretch: {
    flex: 1,
    resizeMode: "cover",
  },
});
