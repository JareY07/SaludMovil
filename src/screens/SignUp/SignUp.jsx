import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const OnRegisterPressed = () => {
        navigation.navigate('ConfirmEmail')
    }

    const OnSignInPressed = () => {
        navigation.navigate('SignIn')
    }


    const navigation = useNavigation();

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root]}>

        <Text style={styles.is}>Registro</Text>

        <CustomInput 
        placeholder="Nombre(s)"
         value={name} 
         setValue={setName} 
         secureTextEntry={false}/>

        <CustomInput 
        placeholder="Apellidos"
         value={lastname} 
         setValue={setLastname} 
         secureTextEntry={false}/>

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
        fontSize: 25,
        color: '#6D5AC6',
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



export default SignUp;