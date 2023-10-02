import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const NewPassword = () => {

    const navigation = useNavigation();
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const OnSubmitPressed = () => {
        navigation.navigate('HomeScreen')
    }

    const OnSignInPressed = () => {
        navigation.navigate('SignIn')
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
        fontSize: 25,
        color: '#c8ffe0',
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



export default NewPassword;