
import { slides } from "@/screens/onboarding/slides";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


type ButtonProps = {
    currentSlide: number;
    scrollToNextSlide: () => void;
}

export function Button({ currentSlide, scrollToNextSlide }: ButtonProps) {
    return (
        <TouchableOpacity onPress={scrollToNextSlide} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>
            {currentSlide === slides.length - 1 ? "Next" : "Next"}
          </Text>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
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