import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ApiCallingWithFeatch() {

    const [data, setData] = useState();

    const getAPIData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/todos/1'
        let result = await fetch(url)
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getAPIData();
    }, [])

    return (
        <View>
            {
                data ?
                    <View>
                        <Text>{data.id}</Text>
                        <Text>{data.title}</Text>
                    </View>: null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    
})