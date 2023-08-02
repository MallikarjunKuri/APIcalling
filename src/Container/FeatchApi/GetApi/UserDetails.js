import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function UserDetails() {
    const { navigate } = useNavigation();
    const [details, setDetails] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const url = "https://api.nationalize.io/?name=nathaniel";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                // here entire data will be render
                // console.log("json=======", json);
                setDetails(json.country);
                setUserName(json.name)
            }
            catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    // console.log("details========", details) //array
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.userNameStyle}>
                <Text>User Name: {userName}</Text>
            </View>
            <View >
                <FlatList
                    data={details}
                    renderItem={
                        ({ item }) => {
                            return (
                                <View style={styles.item_style}>
                                    <View style={{ marginRight: 5 }}>
                                        <Text>
                                            country_id :"{item.country_id}"
                                        </Text>
                                    </View>
                                    <View>
                                        <Text>
                                            probability:"{item.probability}"
                                        </Text>
                                    </View>
                                </View>
                            )
                        }}
                />
            </View>
            <View style={styles.buttonStyle} >
                <Button title='Back to Home' onPress={() => navigate("Home")} color="red" />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DAD6F5',
        width: "100%",
    },
    userNameStyle: {
        textAlign: 'center',
        backgroundColor: 'yellow',
        padding: 20,
        alignItems: "center",
        marginTop: 30,
        marginHorizontal: 16,
    },
    buttonStyle: {
        width: 250,
        height: 200,
        marginTop: 50,
        marginHorizontal: 60,
    },
    item_style: {
        backgroundColor: 'skyblue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 10,
        alignItems: "center"
    },
});


