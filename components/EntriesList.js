import { View, Text, FlatList, StyleSheet, Pressable } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { colors, pressedStyle } from "../helper"
import { Entypo } from "@expo/vector-icons";

export function EntriesList({ entries, isOverLimit }) {
    const navigation = useNavigation()

    return (
        <View style={styles.containerList}>
            <View style={styles.list}>
                <FlatList
                    data={isOverLimit ? entries.filter((item) => item.isOverLimit) : entries}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() =>
                                navigation.navigate("EditEntries", {
                                    id: item.id,
                                    calories: item.calories,
                                    description: item.description,
                                    isOverLimit: item.isOverLimit
                                })}
                            style={({ pressed }) => {
                                return pressed && pressedStyle;
                            }}
                            android_ripple={{ color: colors.LIGHT_BLUE, foreground: true }}
                        >
                            <View style={styles.container}>
                                <Text style={styles.text}>{item.description}</Text>
                                <View style={styles.warningContainer}>
                                    <View style={styles.warning}>
                                        {item.isOverLimit ? (
                                            <View>
                                                <Entypo name="warning" size={20} color={colors.YELLOW} />
                                            </View>)
                                            : (<View></View>)}
                                    </View>
                                    <View style={styles.calories}>
                                        <Text style={styles.caloriesText}>{item.calories}</Text>
                                    </View>
                                </View>

                            </View>
                        </Pressable>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerList: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    list: {
        flex: 4,
        marginTop: 20,
    },
    background: {
        margin: 10,
    },
    container: {
        flexDirection: "row",
        width: 360,
        minHeight: 50,
        padding: 16,
        margin: 10,
        backgroundColor: colors.PURPLE,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 5,
        shadowRadius: 5,
        shadowOpacity: 0.4,
        shadowOffset: { width: 1, height: 2 },
        shadowColor: "rebeccapurple",
    },
    text: {
        fontSize: 17,
        fontWeight: "bold",
        color: colors.WHITE
    },
    calories: {
        width: 60,
        height: 40,
        backgroundColor: colors.WHITE,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    caloriesText: {
        fontSize: 17,
        fontWeight: "bold",
        color: colors.PURPLE
    },
    warning: {
        margin: 10
    },
    warningContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})

