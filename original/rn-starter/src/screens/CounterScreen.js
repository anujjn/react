// useState is referred as hook - a function which adds new functionality to function component (CounterScreen)
import React, { useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
    
    // Not the right way to intialise piece of state - let counter = 0; Counter++ will not update the value in screen
    // By default react does not watch a variable, that whenever it changes, I am gonna update the screen 
    // [ counter, setCounter] - This is array destructuring - Another way of pulling referenced element from array
    // Ex: const colors = [red, green]; const [colorOne, colrTwo] = colors, therefore colorOne = red and colorTwo = green
    const [ counter, setCounter] = useState(0);
    
    return (
        <View>
            <Button 
                title = "Increase"
                onPress = {() => {
                        // Don't do this - Counter++, we do not modify state variable directly
                        // Anytime we call setCounter function, react is going to re run the entire function component we have created
                        setCounter(counter + 1);
                    }
                }/>
            <Button 
                title = "Decrease"
                onPress = {() => {
                        setCounter(counter - 1);
                    }
                }/>
            <Text>Current Counter: {counter}</Text>
        </View>
    );
};

// Creating styles
const styles = StyleSheet.create({});

// Export the component we have created so that we can use somewhere else in our project
export default CounterScreen;