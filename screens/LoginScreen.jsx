import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const LoginScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Icon name="home" size={30} color={'#fff'} style={{
                top: 50,
                left: 20,
                position: 'absolute',
            }} onPress={ () => { navigation.navigate('Home') } } />
            <View style={styles.logoContainer}>

                <Image
                    resizeMode='contain'
                    style={styles.icon}
                    source={require('../assets/login_icon.png')} />

            </View>
            <View style={styles.loginCard}>
                <View style={styles.formField}>
                    <Text style={styles.inputLabel}>Email Address</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.formField}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput style={styles.input} />
                </View>

                <Text style={styles.link1}>Forgot Password?</Text>

                <Pressable style={styles.submitBtn}
                    onPress={() => alert('Login Successfull')}
                    onLongPress={() => alert('You unlocked a secret!')} >
                    <Text style={styles.btnText}>Log In</Text>
                </Pressable>
                <Text style={{
                    textAlign: 'center',
                    marginVertical: 10,
                    fontSize: 16,
                }}>OR</Text>

                <View style={styles.iconContainer}>
                    <View style={styles.socialIcon}>
                        <Icon name="google" size={30} />
                    </View>
                    <View style={styles.socialIcon}>
                        <Icon name="apple1" size={30} />
                    </View>
                    <View style={styles.socialIcon}>
                        <Icon name="facebook-square" size={30} />
                    </View>
                </View>

                <Text style={styles.link2}>Don't have an account? Sign Up</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: 'blue',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    logoContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginCard: {
        flex: 3,
        backgroundColor: 'white',
        padding: 50,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    icon: {
        height: 200,
        width: 200
    },
    formField: {
        marginBottom: 20
    },
    input: {
        backgroundColor: '#eee',
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        borderRadius: 20
    },
    inputLabel: {
        marginLeft: 15,
        marginBottom: 5,
        fontSize: 16,
        color: '#555'
    },
    link1: {
        marginLeft: 'auto',
        color: '#555',
        marginBottom: 10
    },
    submitBtn: {
        backgroundColor: '#ffca3c',
        padding: 15,
        borderRadius: 10,
    },
    btnText: {
        textAlign: 'center',
        fontSize: 18
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    socialIcon: {
        backgroundColor: '#eee',
        padding: 5,
        borderRadius: 10
    },
    link2: {
        textAlign: 'center',
        color: '#555',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default LoginScreen