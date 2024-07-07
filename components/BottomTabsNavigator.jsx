import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import AboutScreen from '../screens/AboutScreen';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTab = ({ route, index }) => {

    const icons = {
        Home: 'home',
        Signup: 'account-plus',
        Login: 'login',
        About: 'information-outline'
    }

    return <TouchableOpacity style={tabStyles.container}>
        <MaterialIcon name={icons[route.name]} size={30} />
        <Text>{route.name}</Text>
    </TouchableOpacity>
}

const tabStyles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        width: '25%',
        alignItems: 'center',
    }

})

const MyCustomTabBar = ({ state, descriptors, navigation }) => {

    console.log(state.routes);

    return <View style={tabBarStyles.container}>
        {
            state.routes.map((route, index) => {
                return <CustomTab key={route.key} route={route} index={index} />
            })
        }
    </View>

}

const tabBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

const BottomTabsNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBar={MyCustomTabBar}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Signup' component={SignupScreen} />
            <Tab.Screen name='Login' component={LoginScreen} />
            <Tab.Screen name='About' component={AboutScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigator;