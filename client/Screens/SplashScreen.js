import { View, Text, Image } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "100%",
      }}
    >
      <Image
        style={{ width: 300, height: 200, resizeMode: "contain" }}
        source={{
          uri: "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png",
        }}
      />
    </View>
  );
};

export default SplashScreen;
