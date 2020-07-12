import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

// When createStackNavigator redirects to Home screen, it will pass lot of props into HomeScreen component (function) as first property
// props.navigation.navigate this will navigate to the screen specified as string
// Instead of receiving all the props in HomeScreen function, we can only receive navigation property (navigation)
const HomeScreen = (props) => {
  return (
      <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Button 
            title = "Go to components screen"
            onPress = {() => props.navigation.navigate("Component")}/>
        <TouchableOpacity onPress = {() => props.navigation.navigate("List")}>
            <Text>Go to list screen</Text>
        </TouchableOpacity>
        <Button 
            title = "Go to Image Demo"
            onPress = {() => props.navigation.navigate("Image")}/>
        <Button 
            title = "Go to Counter Demo"
            onPress = {() => props.navigation.navigate("Counter")}/>
        <Button 
            title = "Go to Color Demo"
            onPress = {() => props.navigation.navigate("Color")}/>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
