import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const LoginScreen = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Login Page</Text>

            <TextInput keyboardType='default' />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        backgroundColor: 'red',
        flex: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default LoginScreen