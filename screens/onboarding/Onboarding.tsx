import { ViewToken } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import { Paginator } from "@/components/Paginator";
import OnboardingSlide from "./OnBoardingSlide";
import { slides } from "./slides";
import { Button } from "@/components/Button";

export function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    setCurrentSlide(viewableItems[0].index || 0);
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
    minimumViewTime: 300,
  }).current;

  const slideRef = useRef<FlatList | null>(null);
  const scrollToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      slideRef.current?.scrollToIndex({ index: currentSlide + 1 });
    } else {
      console.log("Last slide reached");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingSlide item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.paginatorContainer}>
          <Paginator
            currentSlide={currentSlide}
            data={slides}
            scrollX={scrollX}
            containerStyle={styles.paginator}
          />
        </View>
        <Button currentSlide={currentSlide} scrollToNextSlide={scrollToNextSlide} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 140,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    alignItems: "center",
  },
  paginatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 180,
  },
  paginator: {
    marginTop: 32,
  },
  nextButton: {
    backgroundColor: "#1D4ED8",
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    marginBottom: 20,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: 'Poppins-Regular',
  },
});