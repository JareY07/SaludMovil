import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {

    const navigation = useNavigation();
    const [username, setUsername] = useState('');

    const OnSendPressed = () => {
        navigation.navigate('NewPassword')
    }

    const OnSignInPressed = () => {
        navigation.navigate()
    }


    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root]}>

        <Text style={styles.is}>Cambiar contraseña</Text>

        <CustomInput 
        placeholder="Nombre de usuario"
         value={username} 
         setValue={setUsername}/>


        <CustomButton text="Enviar" onPress={OnSendPressed} />

         <CustomButton 
        text="Volver al Inicio de Sesion" 
        onPress={OnSignInPressed} 
        type={"TERTIARY"}/>
        </View>
        </ScrollView> 
    )}

const styles = StyleSheet.create({
    is: {
        fontSize: 25,
        color: '#6c25c6',
        fontWeight: "bold",
        padding: 70,
        textAlign: 'center'
        
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



export default ForgotPassword;