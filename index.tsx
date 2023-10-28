import React, { useState } from 'react';
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
  width?: number;
  height?: number;
  bgColor?: string;
  fontSize?: number;
  fontFamily?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  marginVertical?: number;
  selectedBgColor?: string;
  selectedBdColor?: string;
  paddingVertical?: number;
  marginHorizontal?: number;
  defaultTextColor?: string;
  selectedTextColor?: string;
  paddingHorizontal?: number;
  customTextStyle?: TextStyle;
  customButtonStyle?: ViewStyle;
  customContainerStyle?: ViewStyle;
  onPressCallback: (name: string, id: number) => void; 
}

const Choice: React.FC<ChoiceProps> = ({
  height,
  width,
  fontFamily,
  fontSize = 14,
  customTextStyle,
  onPressCallback,
  customButtonStyle,
  borderRadius = 5,
  bgColor = 'white',
  borderWidth = 0.75,
  customContainerStyle,
  marginVertical = 2.5,
  borderColor = 'blue',
  paddingVertical = 2.5,
  marginHorizontal = 2.5,
  selectedBgColor = 'red',
  paddingHorizontal = 7.5,
  selectedBdColor = 'black',
  selectedTextColor = 'white',
  defaultTextColor = 'black',
  buttonArray = [{ name: 'Empty', id: 1 }],
}) => {
  const [isIndex, setIsIndex] = useState<number>();

  const onPressSelect = (name: string, id: number, index: number) => {
    setIsIndex(index);
    onPressCallback(name, id);
  };

  return (
    <View style={[styles.container, customContainerStyle]}>
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        {buttonArray.map(({ id, name }, index) => (
          <TouchableOpacity
            key={index}
            style={[
              {
                height,
                width,
                borderWidth,
                borderRadius,
                paddingHorizontal,
                paddingVertical,
                marginHorizontal,
                marginVertical,
                backgroundColor: index == isIndex ? selectedBgColor : bgColor,
                borderColor: index == isIndex ? selectedBdColor : borderColor,
              },
              customButtonStyle,
            ]}
            onPress={() => onPressSelect(name, id, index)}>
            <Text
              style={[
                {
                  fontSize,
                  fontFamily,
                  color:
                    index == isIndex ? selectedTextColor : defaultTextColor,
                },
                customTextStyle,
              ]}>
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
  },
});

export default Choice;
