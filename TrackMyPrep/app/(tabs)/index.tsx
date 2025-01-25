import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {

  alert("Hello World")

  return (
    <View>
      <Text style={styles.textthing}>Hello World</Text>
    </View> 
  );
}

const styles = StyleSheet.create({
  textthing: {
    fontSize: 200
  }
});
