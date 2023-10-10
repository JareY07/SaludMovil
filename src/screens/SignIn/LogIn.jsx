import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView, TextInput} from 'react-native'
import logo from 'C:/Users/GWTC/Desktop/SaludMovil/assets/logoSM.png'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form';

const LogIn = () => {
    const OnLogInPressed = data => {
        console.log(data)
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
    const {control, handleSubmit, formState: {errors} } = useForm();
    
    console.log(errors)

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
        name= "email"
        placeholder="Correo Electronico"
        control={control}
        rules ={{required: "El Correo Electronico es requerido",
        pattern: {value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, 
        message: 'El correo es invalido'}}}
        />


        <CustomInput 
        name= "password"
        placeholder="Constraseña"
        control={control}
        secureTextEntry
        rules ={{required: "La contraseña es requerida",
         minLength: {
            value: 8,
            message: 'La contraseña debe de tener minimamente 8 caracteres'
            }}}
        />

        <CustomButton 
        text="Olvidaste tu contraseña?" 
        onPress={OnForgotPasswordPressed} 
        type={"TERTIARY"}/>

        <CustomButton 
        text="INICIAR SESIÓN" 
        onPress={handleSubmit(OnLogInPressed)}/>

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
        color: '#614bc3',
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