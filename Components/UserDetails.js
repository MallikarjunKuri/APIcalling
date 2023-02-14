import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from "react";

export default function UserDetails() {
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
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    // for array
    // console.log("details========", details)
    return (
        //for body view
        <View style={styles.container}>
            <StatusBar style="auto" />

            {/* for user name view */}
            <View style={styles.userNameStyle}>
                <Text>User Name: {userName}</Text>
            </View>
            {/* for flatlist view */}
            <View>
                <FlatList
                    data={details}
                    renderItem=
                    {
                        ({ item }) => 
                        {
                            return (
                                //for giving margine to the renderitems view
                                <View style={{ margin: 20 }}>
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
                        }
                    }
                  
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DAD6F5',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: "100%",
    },
    rowView: {
        flexDirection: "row",
    },
    userNameStyle: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    }

});
