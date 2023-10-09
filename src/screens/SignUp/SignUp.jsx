import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm} from 'react-hook-form';

const SignUp = () => {

    const {control, handleSubmit, watch } = useForm();
    const pass = watch('password');
    const OnRegisterPressed = () => {
        navigation.navigate('ConfirmEmail')
    }

    const OnSignInPressed = () => {
        console.log(data)
        navigation.navigate('SignIn')
    }


    const navigation = useNavigation();

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root]}>

        <Text style={styles.is}>Registro</Text>

        <CustomInput 
         name= 'firstName' 
         placeholder="Primer Nombre"
         control={control}
        rules ={{required: "Este campo es obligatorio.",
        pattern: {
        value: /^[A-Za-z]+$/,
        message: 'No se pueden incluir simbolos ni espacios'}}}
        />

        <CustomInput 
         name='lastname' 
         placeholder="Primer Apellido"
         control={control}
         rules ={{required: "Este campo es obligatorio.",
         pattern: {
            value: /[A-Za-z]+$/,
            message: 'No se pueden incluir simbolos ni espacios'}}}
        />

        <CustomInput 
         name="username" 
         placeholder="Nombre de Usuario"
         control={control}
        rules ={{required: "Este campo es obligatorio.", minLength:{
            value: 3,
            message: 'El nombre de usuario es muy corto'
        }, maxLength: {
            value: 17,
            message: 'El nombre de usuario es demasiado largo'
        }}}
        />

        <CustomInput 
         name='email' 
         placeholder="Correo Electronico"
         control={control}
        rules ={{required: "Este campo es obligatorio.",
        pattern: {
            value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            message: 'Correo Electronico Invalido'}}}
        />


        <CustomInput
        name='password'
        placeholder="Constraseña" 
        secureTextEntry
        control={control}
        rules ={{required: "Este campo es obligatorio.", minLength: {
            value: 8,
            message: 'La contraseña debe de tener minimamente 8 caracteres'
            }}}
        />

        <CustomInput
        name='repeatPassword'
        placeholder="Repetir constraseña"
        secureTextEntry
        control={control}
        rules ={{required: "Este campo es obligatorio.",
            validate: value => value === pass || 'Las contraseñas no coinciden'}}
        />


        <CustomButton text="REGISTRARSE" onPress={handleSubmit(OnRegisterPressed)} />

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



export default SignUp;