import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import logo from 'C:/Users/GWTC/Desktop/SaludMovil/assets/logoSM.png'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'
import ConfirmEmail from '.'

const SignUp = () => {

    const [code, setCode] = useState('');

    const OnConfirmPressed = () => {
        console.warn("Te has registrado")
    }

    const OnSignInPressed = () => {
        console.warn("Volveras al inicio de sesion")
    }

    const OnResendPressed = () => {
        console.warn("Vas a recuperar tu contraseña")
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root]}>

        <Text style={styles.is}>Confirmacion de correo electronico</Text>

        <CustomInput 
        placeholder="Codigo de confirmacion"
         value={code} 
         setValue={setCode}/>


        <CustomButton text="Confirmar" onPress={OnConfirmPressed} />

        <CustomButton 
        text="Reenvar codigo" 
        onPress={OnResendPressed} 
        type={"SECONDARY"}/>

         <CustomButton 
        text="Volver al Inicio de Sesion" 
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



export default ConfirmEmail;