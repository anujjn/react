import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";

// Receiving props passed from parent - ImageScreen
const ImageDetail = (props) => {
    return (
        <View>
            <Image source = {props.imageSource} />
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
   textStyle: {
       fontSize:40
   }  
});

export default ImageDetail;