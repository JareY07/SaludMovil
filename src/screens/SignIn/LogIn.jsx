import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native'
import logo from 'C:/Users/GWTC/Desktop/SaludMovil/assets/logoSM.png'
import CustomInput from '../../components/CustomInputs/customInputs'
import CustomButton from '../../components/CustomButton'

const LogIn = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const OnLogInPressed = () => {
        console.warn("Has Iniciado Sesion")
    }

    const OnSignInPressed = () => {
        console.warn("vas a crear una cuenta!")
    }

    const OnForgotPasswordPressed = () => {
        console.warn("Vas a recuperar tu contraseña")
    }

    const {height} = useWindowDimensions();
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
        placeholder="Correo electronico"
         value={username} 
         setValue={setUsername} 
         secureTextEntry={false} />


        <CustomInput 
        placeholder="Constraseña"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}/>

        <CustomButton 
        text="Olvidaste tu contraseña?" 
        onPress={OnForgotPasswordPressed} 
        type={"TERTIARY"}/>

        <CustomButton text="INICIAR SESIÓN" onPress={OnLogInPressed} />



        <CustomButton 
        text= {`¿Aún no tienes cuenta? Crea una`}
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
        padding: 30
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