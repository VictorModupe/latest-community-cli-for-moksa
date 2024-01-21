import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SkipButton = ({ navigation }) => {
  const handleSkip = () => {
    navigation.navigate('Login'); 
  };

  return (
    <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
      <Text style={styles.skipButtonText}>Skip</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skipButton: {
    marginRight: 20, 
  },
  skipButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SkipButton;
