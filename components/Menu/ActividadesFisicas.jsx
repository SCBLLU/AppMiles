import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faWalking,
  faDumbbell,
  faBiking,
  faEllipsisH,
  faRunning,
  faSwimmer,
  faPersonHiking,
} from "@fortawesome/free-solid-svg-icons";

const initialActivities = [
  {
    id: "1",
    title: "Caminata",
    icon: <FontAwesomeIcon icon={faWalking} size={30} color="#282c34" />,
  },
  {
    id: "2",
    title: "Pesas",
    icon: <FontAwesomeIcon icon={faDumbbell} size={30} color="#282c34" />,
  },
  {
    id: "3",
    title: "Ciclismo",
    icon: <FontAwesomeIcon icon={faBiking} size={30} color="#282c34" />,
  },
  {
    id: "4",
    title: "Más",
    icon: <FontAwesomeIcon icon={faEllipsisH} size={30} color="#282c34" />,
  },
];

const additionalActivities = [
  {
    id: "5",
    title: "Correr",
    icon: <FontAwesomeIcon icon={faRunning} size={30} color="#282c34" />,
  },
  {
    id: "6",
    title: "Natación",
    icon: <FontAwesomeIcon icon={faSwimmer} size={30} color="#282c34" />,
  },
  {
    id: "7",
    title: "Senderismo",
    icon: <FontAwesomeIcon icon={faPersonHiking} size={30} color="#282c34" />,
  },
];

const ActividadesFisicas = () => {
  const [activities, setActivities] = useState(initialActivities);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    if (!showMore) {
      setActivities([...activities.slice(0, 3), ...additionalActivities]);
      setShowMore(true);
    } else {
      setActivities(initialActivities);
      setShowMore(false);
    }
  };

  const renderActivity = ({ item }) => (
    <View key={item.id} style={styles.activityContainer}>
      <TouchableOpacity
        style={styles.activityCard}
        onPress={item.id === "4" ? handleShowMore : undefined}
      >
        {item.icon}
      </TouchableOpacity>
      <Text style={styles.activityTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        renderItem={renderActivity}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "#fff",
    marginHorizontal: 15,
    borderRadius: 20,
  },
  flatListContainer: {
    paddingHorizontal: 20,
  },
  activityContainer: {
    alignItems: "center",
    marginHorizontal: 10,
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
    color: "#333",
  },
});

export default ActividadesFisicas;
