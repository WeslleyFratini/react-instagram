import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>WeslleyFratini</Text>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={{
            uri: "https://github.com/weslleyfratini.png",
          }}
        />
      </View>

      <Image
        style={{
          width: "100%",
          height: 350,
          borderRadius: 20,
        }}
        source={{
          uri: "https://placehold.it/150x150",
        }}
      />

      <View>
        <Text>Like</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
