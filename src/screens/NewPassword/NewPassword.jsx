import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import logo from 'C:/Users/GWTC/Desktop/SaludMovil/assets/logoSM.png'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'


const NewPassword = () => {

    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const OnSubmitPressed = () => {
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

        <Text style={styles.is}>Cambiar contraseña</Text>

        <CustomInput 
        placeholder="Codigo"
         value={code} 
         setValue={setCode}/>

        <CustomInput 
        placeholder="Nueva Contraseña"
         value={newPassword} 
         setValue={setNewPassword}/>


        <CustomButton text="Cambiar" onPress={OnSubmitPressed} />


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



export default NewPassword;