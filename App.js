import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function InstaGitHubCard({githubUser}) {
  return (
    <View>
      <View>
        <Text>{githubUser}</Text>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={{
            uri: `https://github.com/${githubUser}.png`,
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
          uri: `https://github.com/${githubUser}.png`,
        }}
      />

      <Ionicons name="ios-heart" size={24} color="black" />
    </View>
  );
}

export default function App() {
  return (
    <View> style={styles.container}
   <ScrollView>
      {
      [
        "WeslleyFratini", 
        "WeslleyFratini",
        "WeslleyFratini", 
        "WeslleyFratini"
      ].map((githubUser) =>
      <InstaGitHubCard key={githubUser} githubUser={githubUser}/>
      )}
    </ScrollView>
    </View>

  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
