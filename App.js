import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import GoalInput from "./components/goalInput";
import GoalItem from "./components/goalItem";

export default function App() {
    const [goals, setGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    };

    const endAddGoalHandler = () => {
        setModalIsVisible(false);
    };

    const addGoalHandler = (enteredGoalText) => {
        setGoals((prevGoals) => [
            ...prevGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
        endAddGoalHandler(false);
    };

    const deleteGoalHandler = (id) => {
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
    };
    return (
        <View style={styles.container}>
            <Button
                title={"Add New Goal"}
                color="#5e0acc"
                onPress={startAddGoalHandler}
            />
            <GoalInput
                onAddGoal={addGoalHandler}
                onCancel={endAddGoalHandler}
                visible={modalIsVisible}
            />
            <View style={styles.bottom_section}>
                <FlatList
                    data={goals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDelete={deleteGoalHandler}
                            />
                        );
                    }}
                    keyExtractor={(item) => item.id}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingHorizontal: 15,
        flex: 1,
        backgroundColor: "#fff",
    },
    bottom_section: {
        flex: 5,
        paddingTop: 10,
    },
});
