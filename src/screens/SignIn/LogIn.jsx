import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import logo from 'C:/Users/GWTC/Desktop/SaludMovil/assets/logoSM.png'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const LogIn = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const OnLogInPressed = () => {

        navigation.navigate('HomeScreen')
    }

    const OnSignInPressed = () => {
        navigation.navigate('SignUp')
    }

    const OnForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword') 
    }

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root]}>
        <Image 
        source={logo} 
        style={[styles.logo, {height: height * 0.35}]}
        resizeMode="contain"
        />

        <Text style={styles.is}>Inicio de Sesión</Text>

        <CustomInput 
        placeholder="Correo electronico"
         value={username} 
         setValue={setUsername} 
         secureTextEntry={false} />


        <CustomInput 
        placeholder="Constraseña"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}/>

        <CustomButton 
        text="Olvidaste tu contraseña?" 
        onPress={OnForgotPasswordPressed} 
        type={"TERTIARY"}/>

        <CustomButton text="INICIAR SESIÓN" onPress={OnLogInPressed} />



        <CustomButton 
        text= {`¿Aún no tienes cuenta? Crea una`}
        onPress={OnSignInPressed} 
        type={"TERTIARY"}/>
        </View>
        </ScrollView> 
    )}

const styles = StyleSheet.create({
    is: {
        fontSize: 25,
        color: '#6D5AC6',
        fontWeight: "bold",
        padding: 30,
        textAlign: 'center'
    },
    root: {
        alignItems: 'center',
    },
    logo: {
        width: '85%',
        maxWidth: 500,
        maxHeight: 400,
    },
    link:{
        color: '#41C2C5'
    }
})



export default LogIn;