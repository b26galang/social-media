import { View, Image, StyleSheet, ScrollView } from "react-native";
import Posts from "./Posts";

const uris = [
    "https://i.gyazo.com/36544c8b217cf1ee898bbb295e902e99.png",
    "https://i.gyazo.com/0b0bc29d43f5ea0012c51ca131e1ff1e.png",
    "https://i.gyazo.com/446919eb8e3e6cdbf8ed726b1c1ae522.png"
]

export default function PostItems() {

    return (
        <View>
            <ScrollView style={postContainerStyles.imagesContainer}>
                {uris.map(uri => (
                    <Posts uri={uri} key={uri} />
                ))}
            </ScrollView>
        </View>
    )
}

const postContainerStyles = StyleSheet.create({
    imagesContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})