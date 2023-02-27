import { View, Image, Text, StyleSheet } from "react-native";


export default function AboutMe() {

    return <View>
        <Image style={styles.image} source={{ uri: "https://i.gyazo.com/01144e4372c3edfe5dc7e09283e3136e.png" }} />
        <Text style={styles.aboutMe}>About Me:</Text>
        <Text>
            <ul>
                <li>Chihuahua and Italian Greyhound mix</li>
                <li>Random fact: often mistaken for a daschound</li>
                <li>Likes: attention, food, sunbathing</li>
                <li style={styles.redText}>Dislikes: sharing toys</li>
            </ul>
        </Text>
    </View>

}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        margin: 'auto',
        borderRadius: 50
    },
    redText: {
        color: "red"
    },
    aboutMe: {
        fontWeight: "bold",
        fontSize: 15
    }
})