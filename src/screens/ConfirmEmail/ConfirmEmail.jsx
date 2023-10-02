import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
const ConfirmEmail = () => {

    const navigation = useNavigation()
    const [code, setCode] = useState('');

    const OnConfirmPressed = () => {
        navigation.navigate('HomeScreen')
    }

    const OnSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    const OnResendPressed = () => {
        console.warn("23427")
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



export default ConfirmEmail;