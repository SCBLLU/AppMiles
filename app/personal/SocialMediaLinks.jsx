import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const SocialMediaLinks = ({ isDarkMode, title = "Follow Us" }) => {
  const socialMedia = [
    {
      name: "instagram",
      url: "https://www.instagram.com",
      icon: "instagram",
      type: "FontAwesome",
    },
    {
      name: "tiktok",
      url: "https://www.tiktok.com",
      icon: "tiktok",
      type: "FontAwesome5",
    },
    {
      name: "spotify",
      url: "https://open.spotify.com",
      icon: "spotify",
      type: "FontAwesome",
    },
  ];

  const renderIcon = (media) => {
    const iconProps = {
      size: 30,
      color: isDarkMode ? "#fff" : "#000",
      style: styles.icon,
    };

    return media.type === "FontAwesome5" ? (
      <FontAwesome5 name={media.icon} {...iconProps} />
    ) : (
      <FontAwesome name={media.icon} {...iconProps} />
    );
  };

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
        {title}
      </Text>
      <View style={styles.container}>
        {socialMedia.map((media) => (
          <TouchableOpacity
            key={media.name}
            onPress={() => Linking.openURL(media.url)}
            style={styles.iconContainer}
          >
            {renderIcon(media)}
            <Text
              style={[
                styles.iconLabel,
                { color: isDarkMode ? "#fff" : "#000" },
              ]}
            >
              {media.name.charAt(0).toUpperCase() + media.name.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: 20,
  },
  iconContainer: {
    alignItems: "center",
    minWidth: 70,
  },
  icon: {
    marginBottom: 8,
  },
  iconLabel: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default SocialMediaLinks;
