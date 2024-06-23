import React from 'react'
import { Button, Text, View } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={{ padding: 50 }}>
            <Text
                style={titleStyles}
            >My React Native Cross Platform App</Text>

            <View style={{ marginTop: 20 }}>
                <Button title="Ready to Rock" />
            </View>

        </View>
    )
}

const titleStyles = {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
}

export default HomeScreen