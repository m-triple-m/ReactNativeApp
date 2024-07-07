import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName='Login'>

            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerRight: () => <Icon name='login-variant' size={28} onPress={ () => navigation.navigate('Login') } />
            }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{
                title: 'Sign In',
                header: () => null
            }} />

        </Stack.Navigator>
    )
}

export default StackNavigator