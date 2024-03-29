import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';


const LoadingPage = (props) => {

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#EA4335" />
            <Text>{props.message ? props.message : ''} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.9,
        zIndex: 9999,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        elevation:20
    },
    image: {
        width: 80,
        height: 80,
    },
});

export default LoadingPage;
