import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import logo from 'C:/Users/GWTC/Desktop/SaludMovil/assets/logoSM.png'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const OnRegisterPressed = () => {
        console.warn("Te has registrado")
    }

    const OnSignInPressed = () => {
        console.warn("Volveras al inicio de sesion")
    }

    const OnForgotPasswordPressed = () => {
        console.warn("Vas a recuperar tu contraseña")
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root]}>

        <Text style={styles.is}>Registro</Text>

        <CustomInput 
        placeholder="Nombre de Usuario"
         value={username} 
         setValue={setUsername} 
         secureTextEntry={false}/>

        <CustomInput 
        placeholder="Correo Electronico"
         value={email} 
         setValue={setEmail} 
         secureTextEntry={false}/>


        <CustomInput 
        placeholder="Constraseña" 
        value={password} 
        setValue={setPassword} 
        secureTextEntry={true}/>

        <CustomInput 
        placeholder="Repetir constraseña" 
        value={passwordRepeat} 
        setValue={setPasswordRepeat} 
        secureTextEntry={true}/>

        <Text style={styles.text}>Al registrarte estas aceptando nuestras politicas de <Text style={styles.link}>términos y condiciones</Text></Text>

        <CustomButton text="REGISTRARSE" onPress={OnRegisterPressed} />

         <CustomButton 
        text="¿Ya tienes cuenta?" 
        onPress={OnSignInPressed} 
        type={"TERTIARY"}/>
        </View>
        </ScrollView> 
    )}

const styles = StyleSheet.create({
    is: {
        fontSize: 30,
        color: '#c8ffe0',
        fontWeight: "bold",
        padding: 70
    },
    root: {
        alignItems: 'center',
    },
    text: {
        marginVertical: 15,
        marginHorizontal: 53,
        color: '#c8ffe0'
    },
    link: {
        color: '#33BBC5'
    }
})



export default SignUp;