import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function FeatchAPIWithMap() {

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
                    data.map(() =>
                        <View>
                            <Text>{data.id}</Text>
                            <Text>{data.title}</Text>
                        </View>
                    ) : null
            }

        </ScrollView>
    )
}

const styles = StyleSheet.create({})