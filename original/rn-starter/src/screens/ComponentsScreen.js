import React from "react";
import { Text, StyleSheet } from "react-native";

// function() == () =>
const ComponentsScreen = () => {
    
    // js code - we can use js code inside JSX
    const greetings = "Hey there";
    // JSX code
    // This is not valid js - when you write this code, it passes into react native bundler running inside our terminal 
    // which uses a tool called dabble which turn this code into some plain js code
    return <Text style = {styles.textStyle}>This is a component screen + {greetings} </Text>;
};

// Creating styles
const styles = StyleSheet.create({
    // Creating new style property - grouping of different styling rules that we are gonna apply to text
    textStyle: {
        fontSize:30
    }
});

// Export the component we have created so that we can use somewhere else in our project
export default ComponentsScreen;