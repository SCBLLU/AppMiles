import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Footprints, Dumbbell, Bike, Plus } from "lucide-react-native";

const activities = [
    {
        id: "1",
        title: "Caminata",
        icon: <Footprints size={30} color="#282c34" />,
    },
    { id: "2", title: "Pesas", icon: <Dumbbell size={30} color="#282c34" /> },
    { id: "3", title: "Ciclismo", icon: <Bike size={30} color="#282c34" /> },
    { id: "4", title: "Más", icon: <Plus size={30} color="#282c34" /> },
];

const ActividadesFisicas = () => {
    return (
        <View style={styles.container}>
            {activities.map((activity) => (
                <View key={activity.id} style={styles.activityContainer}>
                    <TouchableOpacity style={styles.activityCard}>
                        {activity.icon}
                    </TouchableOpacity>
                    <Text style={styles.activityTitle}>{activity.title}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        paddingVertical: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
        margin: 10,
    },
    activityContainer: {
        alignItems: "center",
    },
    activityCard: {
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#fff",
        elevation: 5,
    },
    activityTitle: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: "bold",
        color: "#333",
    },
});

export default ActividadesFisicas;
