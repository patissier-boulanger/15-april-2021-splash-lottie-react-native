import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import splash from "./assets/newSplash.png";
import LottieView from "lottie-react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import SvgTest from "./svg";

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={() =>
          Font.loadAsync({
            Rubik: require("./assets/fonts/Rubik-BlackItalic.ttf"),
          })
        }
        onFinish={() => setIsFontLoaded(true)}
        onError={console.warn}
      ></AppLoading>
    );
  }

  return (
    <>
      {!isAppReady ? (
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
            speed={0.6}
            onAnimationFinish={() => setIsAppReady(true)}
          />
          <StatusBar style="auto" />
        </View>
      ) : (
        <SafeAreaView>
          <Text style={{ fontFamily: "Rubik", fontSize: 20 }}>
            RubikRubikRubikRubikRubikRubikRubik
          </Text>
          <SvgTest />
        </SafeAreaView>
      )}
    </>
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
