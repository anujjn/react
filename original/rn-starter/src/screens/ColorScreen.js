import React, {useState} from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
    // Initialise use state with empty array
    const[colors, setColor] = useState([]);
    
    return (
        <View>
            <Button title = "Add a color"
                    onPress = { () => {
                        // Creating a brand new array by putting [], ...color means take a look at the colors array, take all colors and add them inside a new array
                        setColor([...colors, randomRgb()])
                }}
            />
            
            <FlatList
                keyExtractor = {item => item}
                data = {colors}
                renderItem = { (item) => {
                                return (
                                    <View style={{ height: 100, width: 100, backgroud: item }}/>
                              );                          
                        }
                }
            />
        </View>
    );
};

// Helper function to generate a random color
const randomRgb = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    
    // return a template string
    return `rgb(${red}, ${green}, ${blue})`;
}

// Creating styles
const styles = StyleSheet.create({});

// Export the component we have created so that we can use somewhere else in our project
export default ColorScreen;