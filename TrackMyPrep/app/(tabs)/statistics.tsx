import { StyleSheet, View, Text} from 'react-native';



export default function TabTwoScreen() {
  return (
    <View style={styles.viewbox}>
    <Text style={styles.titleText}>
      Hello World
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewbox : {
    display: 'flex',
    height: 800,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Calibri',
    fontSize: 30,
    padding: 20
  }
});
