import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface OnboardingSlideProps {
    title: string;
    description?: string;
    image: any; // You can replace 'any' with a more specific type if you know it, e.g., ImageSourcePropType
  }

const OnboardingSlide = ({ title, description, image }: OnboardingSlideProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      {/* <Text style={styles.description}>{description}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },
});

export default OnboardingSlide;
