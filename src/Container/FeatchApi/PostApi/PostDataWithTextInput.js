import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostDataWithTextInput = () => {
    const PostApiData = async () => {
        const data = {
            name: "mallikarjun",
            age: 20,
            gmail: "mallu0099@gmail.com"
        }
        console.log(data);
        // const url='https://jsonplaceholder.typicode.com/posts'
        const url = ""
        let result = await fetch(url, {
            method: 'POST',
            headers: { "content-type": "appitication/json" },
            body: JSON.stringify(data) //converting object to json format before sending it as
        })
        result = await result.json();
        console.log("result:", result);
    }
    return (
        <View>
            <Text style={{ fontSize: 30, marginBottom: 60 }}>PostDataWithTextInput</Text>
            <Button title='save data' onPress={PostApiData} />
        </View>
    )
}

export default PostDataWithTextInput

const styles = StyleSheet.create({

})