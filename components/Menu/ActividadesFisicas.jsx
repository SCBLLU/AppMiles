import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faWalking,
  faDumbbell,
  faBiking,
  faRunning,
  faSwimmer,
  faPersonHiking,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../Utils/DarkModeProvider";
import { useRouter } from "expo-router";
import data from "../../data/data.json";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const iconMap = {
  faWalking,
  faDumbbell,
  faBiking,
  faRunning,
  faSwimmer,
  faPersonHiking,
};

const activityTimer = data.activityTimer;

const ActividadesFisicas = () => {
  const { isDarkMode } = useDarkMode();
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  const visibleActivities = useMemo(() => {
    return showMore ? activityTimer : activityTimer.slice(0, 3);
  }, [showMore]);

  const handleToggleActivities = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowMore((prev) => !prev);
  }, []);

  const handleActivityPress = useCallback(
    (activity) => {
      router.push({
        pathname: `/exercise-timer/${activity.id}`,
        params: { title: activity.title },
      });
    },
    [router]
  );

  const renderActivity = useCallback(
    (item) => (
      <View key={item.id} style={styles.activityContainer}>
        <TouchableOpacity
          style={[
            styles.activityCard,
            { backgroundColor: isDarkMode ? "#444" : "#fff" },
          ]}
          activeOpacity={0.7}
          onPress={() => handleActivityPress(item)}
        >
          <FontAwesomeIcon
            icon={iconMap[item.icon]}
            size={30}
            color={isDarkMode ? "#ccc" : "#333"}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.activityTitle,
            { color: isDarkMode ? "#ccc" : "#333" },
          ]}
        >
          {item.title}
        </Text>
      </View>
    ),
    [isDarkMode, handleActivityPress]
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#222" : "#F3F4F6" },
      ]}
    >
      <Text style={[styles.header, { color: isDarkMode ? "#fff" : "#000" }]}>
        Actividades Físicas
      </Text>
      <View style={styles.activitiesContainer}>
        {visibleActivities.map(renderActivity)}
      </View>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          { backgroundColor: isDarkMode ? "#555" : "#eee" },
        ]}
        onPress={handleToggleActivities}
        activeOpacity={0.8}
      >
        <FontAwesomeIcon
          icon={showMore ? faAngleUp : faAngleDown}
          size={30}
          color={isDarkMode ? "#ccc" : "#333"}
        />
        <Text
          style={[styles.toggleText, { color: isDarkMode ? "#ccc" : "#333" }]}
        >
          {showMore ? "Ver menos" : "Ver más"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginHorizontal: 15,
    elevation: 3,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  activitiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  activityContainer: {
    alignItems: "center",
    marginBottom: 20,
    flexBasis: "30%",
  },
  activityCard: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  activityTitle: {
    marginTop: 8,
    fontSize: 13,
    textAlign: "center",
    fontWeight: "500",
  },
  toggleButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    elevation: 5,
    flexDirection: "row",
    alignSelf: "center",
  },
  toggleText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default ActividadesFisicas;
