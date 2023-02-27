import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

type propTypes = {
    uri: string
    key: string
}

export default function Posts(props: propTypes) {

    return <View>
        <Image style={styles.image} source={{ uri: props.uri }} />


    </View>

}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 300,
        resize: 'contain',
        margin: 2
    }
})