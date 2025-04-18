import { StatusBar } from "expo-status-bar";
import CategoryScreen from "./screens/CategoryScreen";
import { StyleSheet } from "react-native";

import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello from App.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
    
    alignItems:'center'
  }
});