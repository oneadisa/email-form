import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  useColorScheme,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

interface SubmittedData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);

  const isDarkMode = useColorScheme() === 'dark';

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    setSubmittedData({ email, password });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff' }
    ]}>
      <Text style={[
        styles.title,
        { color: isDarkMode ? '#ffffff' : '#000000' }
      ]}>Login Form</Text>
      
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: isDarkMode ? '#333333' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#000000',
            borderColor: isDarkMode ? '#666666' : '#dddddd',
          }
        ]}
        placeholder="Email"
        placeholderTextColor={isDarkMode ? '#999999' : '#666666'}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: isDarkMode ? '#333333' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#000000',
            borderColor: isDarkMode ? '#666666' : '#dddddd',
          }
        ]}
        placeholder="Password"
        placeholderTextColor={isDarkMode ? '#999999' : '#666666'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {submittedData && (
        <View style={[
          styles.resultContainer,
          {
            backgroundColor: isDarkMode ? '#333333' : '#f5f5f5',
          }
        ]}>
          <Text style={[
            styles.resultTitle,
            { color: isDarkMode ? '#ffffff' : '#000000' }
          ]}>Submitted Data:</Text>
          <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
            Email: {submittedData.email}
          </Text>
          <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
            Password: {submittedData.password}
          </Text>
        </View>
      )}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default LoginForm;