import React from "react";
import {Text, View, StyleSheet} from "react-native";
import ImageDetail from "../Components/ImageDetail";

// Passing Title from Image Screen to Image Detail Component
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forest"
                imageSource = {require('../../assets/forest.jpg')}
            />
            <ImageDetail 
                title="Mountain"
                imageSource = {require('../../assets/mountain.jpg')}
            />
            <ImageDetail 
                title="Beach"
                imageSource = {require('../../assets/beach.jpg')}
            />
            <ImageDetail />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;