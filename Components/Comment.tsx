import { TextInput, View, Text, StyleSheet } from "react-native";
import { useState } from 'react';

export default function Comment() {

    const [comment, setComment] = useState<string>('');

    return (
        <View>
            <Text>Don't forget to leave a comment!</Text>
            <TextInput value={comment} onChangeText={setComment} style={styles.input} />

            <Text>{comment}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: 200,
        margin: 'auto',
        lineHeight: '5',
        backgroundColor: "#fff"
    }
})