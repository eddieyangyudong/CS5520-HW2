import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { colors, pressedStyle } from "../helper";

export function MyButton({ text, onPress}) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.basic,
                styles["normal"],
                pressed && pressedStyle,
            ]}
            android_ripple={{ color: colors.LIGHT_BLUE, foreground: true }}
            onPress={onPress}
        >
            <Text style={[styles["normal"].text]}>{text}</Text>
        </Pressable>
    );
}
const normalBtn = {
    padding: 12,
    height: 50,
    minWidth: 70,
    borderRadius: 5,
    shadowRadius: 3,
    shadowOpacity: 0.1,
    margin: 12,
    borderWidth: 2,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.PURPLE,
    borderColor: colors.PURPLE,
};

const styles = StyleSheet.create({
    basic: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 6
    },
    normal: {
        ...normalBtn,
        backgroundColor: colors.PURPLE,
        text: { fontSize: 23, color: colors.WHITE },
    },
    text: {
        text: {
            fontSize: 32,
            color: colors.WHITE,
        },
    },
});