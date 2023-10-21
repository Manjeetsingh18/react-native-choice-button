import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';

interface AppProps {
  buttonArray: string[];
  onPressCallback: (value: string, index: Number) => void;
}

const App: React.FC<AppProps> = ({ buttonArray, onPressCallback }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        {buttonArray.map((value, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => onPressCallback(value, index)}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    margin: 5,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
