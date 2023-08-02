import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function FeatchDataWithFlatList() {

    const [data, setData] = useState();

    const getAPIData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/comments?postId=1'
        let result = await fetch(url)
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getAPIData();
    }, [])

    return (
        <ScrollView>
            {
                data.length ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <View>
                            <Text>{item.id}</Text>
                        </View>}
                    />
                    : null
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({})