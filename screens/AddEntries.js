import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors } from "../helper";
import { useNavigation } from "@react-navigation/native";
import { MyButton } from "../components/MyButton";
import { addEntries } from "../firebase/firestore";

const AddEntries = () => {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");
  const [isOverLimit, setIsOverLimit] = useState(false);
  const invalidInput = () => {
    Alert.alert("Invalid Input", "Please check you input");
  }
  const isValid = (string) => {
    if (typeof string != "string") {
      return false;
    }
    const input = Number(string);
    if (Number.isInteger(input) && input > 0) {
      return true;
    }
    return false;
  }
  const navigation = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled">

      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Calories</Text>
          <TextInput
            value={calories}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => {
              setCalories(text);
              setIsOverLimit(parseInt(text) > 500 ? true : false);
            }}
          />

        </View>

        <View>
          <Text style={styles.text}>Description</Text>
          <TextInput
            value={description}
            style={[styles.input, styles.text1]}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={3}
          />
        </View>

        <View style={styles.buttons}>
          <MyButton text="Reset" onPress={() => {
            setCalories("");
            setDescription("");
          }} />
          <MyButton text="Submit" onPress={() => {
            if (!isValid(calories) || !description) {
              return invalidInput();
            }
            addEntries({ calories, description, isOverLimit }).then(() => {
              navigation.goBack();
            });

          }} />

        </View>

      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 70,
    backgroundColor: colors.WHITE,
  },
  text: {
    fontSize: 15,
  },
  input: {
    marginTop: 8,
    height: 50,
    width: 350,
    backgroundColor: colors.WHITE,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.PURPLE,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 30,
    margin: 20
  },
  text1: {
    height: 120,
    textAlignVertical: "top",
  },

});

export default AddEntries;
