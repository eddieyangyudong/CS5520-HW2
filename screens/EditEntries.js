import { deleteEntries, updateEntries } from "../firebase/firestore";
import { colors } from "../helper";
import { View, Text, Alert, StyleSheet } from 'react-native'
import { React, useState, useEffect } from 'react'
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const EditEntries = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;

  const changeOverLimit = () => {
    Alert.alert("Important", "Are you sure you want to mark this item as reviewed?",
      [
        { text: "No", onPress: () => { } },
        {
          text: "Yes", onPress: () => {
            updateEntries(id, {
              calories: route.params.calories,
              description: route.params.description,
              isOverLimit: false
            }).then(navigation.goBack);
          }
        }
      ]
    );
  }

  const onDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this?",
      [
        { text: "No", onPress: () => { } },
        {
          text: "Yes", onPress: () => {
            deleteEntries(id).then(navigation.goBack)
          }
        }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calories: {route.params.calories}</Text>
      <Text style={styles.text}>Description: {route.params.description}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.icon}>
          <IconButton
            icon={props => <Icon name="delete-outline" {...props}
              onPress={onDelete}
              size={30}
              color={colors.WHITE}
            />} />
        </View>
        {
          route.params.isOverLimit ?
            <View style={styles.icon}>
              <IconButton
                icon={props => <Icon name="check" {...props}
                  onPress={changeOverLimit}
                  size={30}
                  color={colors.WHITE} />} />
            </View> : <View></View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.LIGHT_PURPLE,
    margin: 70,
    minHeight: 200,
    minwidth: 270,
    padding: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 7,
    color: colors.PURPLE

  },
  buttonContainer: {
    flexDirection: "row",
    width: 100,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: colors.PURPLE,
    width: 70,
    alignItems: "center",
    margin: 10
  }




});


export default EditEntries