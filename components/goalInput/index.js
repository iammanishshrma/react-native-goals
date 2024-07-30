import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    };
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter Goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button
                            disabled={enteredGoalText.length === 0}
                            title="Add Goal"
                            onPress={addGoalHandler}
                        />
                    </View>
                    <View style={styles.btn}>
                        <Button title="Cancel" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        padding: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "100%",
        height: 40,
        padding: 8,
    },
    btnContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    btn: {
        width: 100,
        marginHorizontal: 8,
    },
});
