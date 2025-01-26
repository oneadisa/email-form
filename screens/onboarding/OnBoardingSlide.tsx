import { Image, Text, useWindowDimensions, View, StyleSheet } from "react-native";
import { SlideItem } from "./slides";

export interface OnboardingItemProps {
  item: SlideItem;
}

export default function OnboardingSlide({ item }: OnboardingItemProps) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width }]}
      />
      <View style={styles.content}>
        <Text style={styles.description}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: 200,
    height: 250,
    resizeMode: "contain",
    marginBottom: 60,
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 35,
    gap: 20,
  },
  description: {
    width: 340,
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    color: "#33",
    lineHeight: 38,

    paddingTop: 20,
  },
});