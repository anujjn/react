import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

// function() == () =>
const ListScreen = function(){
    // Building array of object which we want to render into screen
    const friends = [
        { name: "FirstFriend"},
        { name: "SecondFriend"},
        { name: "ThirdFriend"},
        { name: "FourthFriend"}
    ];
    
    return (
        <FlatList 
            horizontal
            showHorizontalScrollIndicator = {false}
            // Assigning a key to each object in array so that when it is deleted from array, only that item gets deleted from list
            keyExtractor = {friends => friends.name}
            data = {friends}
            // A function that is going to be called with every element in array
            // element === {item: {name: FirstFriend}, index: 0 }
            // renderItem = {(element) => {}}/>
            renderItem = {({item}) => {
                return <Text>{item.name}</Text>
            }}
        />
        
    );
};

// Creating styles
const styles = StyleSheet.create({
    textStyle: {
        fontSize:30
    }
});

export default ListScreen;