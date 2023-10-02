import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');

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
        placeholder="Correo Electronico"
         value={email} 
         setValue={setEmail}/>


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
        color: '#614bc3',
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