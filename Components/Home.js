import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/exa-blue-logo.png')}
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button title='View User Details' onPress={() => navigate("User Details")} color="" />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DAD6F5',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",

    },
    imageStyle: {
        width: 300,
        height: 100,
    },
    buttonStyle: {
        width: 250,
        height: 200,
        marginTop: 30

    }

});
