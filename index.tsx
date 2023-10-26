import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ChoiceProps {
  buttonArray: Array<{
    id: number;
    name: string;
  }>;
  customTextStyle?: TextStyle;
  customButtonStyle?: ViewStyle;
  customContainerStyle?: ViewStyle;
  onPressCallback: (name: string, id: number) => void; // Define the callback function
}

const Choice: React.FC<ChoiceProps> = ({
  buttonArray = [{ name: 'Empty', id: 1 }],
  customTextStyle,
  onPressCallback,
  customButtonStyle,
  customContainerStyle,
}) => {
  return (
    <View style={[styles.container, customContainerStyle]}>
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        {buttonArray.map(({ id, name }, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, customButtonStyle]}
            onPress={() => onPressCallback(name, id)}> {/* Call the callback with name and id */}
            <Text style={[styles.buttonText, customTextStyle]}>
              {name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    margin: 5,
    borderRadius: 5,
    paddingLeft: 7.5,
    paddingRight: 7.5,
    paddingVertical: 2.5,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Choice;
