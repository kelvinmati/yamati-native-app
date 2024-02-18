import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native";
const Chats = ({ navigation }) => {
  return (
    <>
      <ScrollView
        style={{
          padding: 10,
          position: "relative",
          // backgroundColor: "red",
        }}
      >
        {chats.map(() => (
          <TouchableOpacity onPress={() => navigation.navigate("Username")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                padding: 6,
                borderRadius: 5,
                marginBottom: 7,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{
                    uri: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/950474/1.jpg?5772",
                  }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 20,
                    marginRight: 30,
                  }}
                />
                <View>
                  <Text style={{ fontSize: 22 }}>Kelvin</Text>
                  <Text>It's okay we will talk..</Text>
                </View>
              </View>
              <View>
                <Text>3.56</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 50,
          right: 30,
          backgroundColor: "green",
          padding: 7,
          borderRadius: 20,
        }}
      >
        {/* <Button /> */}
        <MaterialIcons
          onPress={() => navigation.navigate("Maps")}
          name="message"
          size={24}
          color="#fff"
        />
        {/* <Text>d</Text> */}
      </View>
    </>
  );
};

export default Chats;
const chats = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6,
];
