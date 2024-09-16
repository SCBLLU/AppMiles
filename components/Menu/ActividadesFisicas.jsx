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
import { useDarkMode } from "../Utils/DarkModeProvider";

const initialActivities = [
  {
    id: "1",
    title: "Caminata",
    icon: <FontAwesomeIcon icon={faWalking} size={30} />,
  },
  {
    id: "2",
    title: "Pesas",
    icon: <FontAwesomeIcon icon={faDumbbell} size={30} />,
  },
  {
    id: "3",
    title: "Ciclismo",
    icon: <FontAwesomeIcon icon={faBiking} size={30} />,
  },
  {
    id: "4",
    title: "Más",
    icon: <FontAwesomeIcon icon={faEllipsisH} size={30} />,
  },
];

const additionalActivities = [
  {
    id: "5",
    title: "Correr",
    icon: <FontAwesomeIcon icon={faRunning} size={30} />,
  },
  {
    id: "6",
    title: "Natación",
    icon: <FontAwesomeIcon icon={faSwimmer} size={30} />,
  },
  {
    id: "7",
    title: "Senderismo",
    icon: <FontAwesomeIcon icon={faPersonHiking} size={30} />,
  },
];

const ActividadesFisicas = () => {
  const { isDarkMode } = useDarkMode();
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
        style={[
          styles.activityCard,
          { backgroundColor: isDarkMode ? "#444" : "#fff" },
        ]}
        onPress={item.id === "4" ? handleShowMore : undefined}
      >
        {React.cloneElement(item.icon, {
          color: isDarkMode ? "#fff" : "#282c34",
        })}
      </TouchableOpacity>
      <Text
        style={[styles.activityTitle, { color: isDarkMode ? "#ccc" : "#333" }]}
      >
        {item.title}
      </Text>
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#F3F4F6" },
      ]}
    >
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
    borderRadius: 20,
    marginHorizontal: 15,
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
    elevation: 5,
  },
  activityTitle: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default ActividadesFisicas;
