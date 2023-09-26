import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions} from 'react-native'
import logo from 'C:/Users/GWTC/Desktop/SaludMovil/assets/logoSM.png'
import CustomInput from '../components/CustomInputs/customInputs'
import CustomButton from '../components/CustomButton'

const LogIn = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const OnLogInPressed = () => {
        console.warn("Has Iniciado Sesion")
    }

    const {height} = useWindowDimensions();
    return(
        <View style={[styles.root, styles.container ]}>
        <Image 
        source={logo} 
        style={[styles.logo, {height: height * 0.35}]}
        resizeMode="contain"
        />

        <Text style={styles.is}>Inicio de Sesión</Text>
        <Text style={styles.Text}>Inicio de sesion con tu cuenta de Celud</Text>


        <Text style={styles.Text}>Correo electronico</Text>
        <CustomInput placeholder="cuenta@gmail.com" value={username} setValue={setUsername} secureTextEntry={false} />

        <Text style={styles.Text}>Contraseña</Text>
        <CustomInput placeholder="Ingrese la constraseña" value={password} setValue={setPassword} secureTextEntry={true}/>

        <CustomButton text={"INICIAR SESIÓN"} onPress={OnLogInPressed} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '85%',
        maxWidth: 500,
        maxHeight: 400,
    },
    Text: {
        color: '#c8ffe0',
        paddingHorizontal: 15,
        width: '75%',
        alignItems: 'flex-start',
    },
    is: {
        color: '#c8ffe0',
        paddingHorizontal: 15,
        width: '75%',
        alignItems: 'flex-start',
        fontWeight: 'bold',
        padding: 20,
    }
})



export default LogIn;