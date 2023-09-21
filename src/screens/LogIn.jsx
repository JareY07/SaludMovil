import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, useWindowDimensions} from 'react-native'
import logo from 'C:/Users/GWTC/Desktop/SaludMovil/assets/logoSM.png'
import CustomInput from '../components/CustomInputs/customInputs'
import CustomButton from 'C:/Users/GWTC/Desktop/SaludMovil/src/components/CustomButton'

const LogIn = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const {height} = useWindowDimensions();
    return(
        <View style={[styles.root, styles.container ]}>
        <Image 
        source={logo} 
        style={[styles.logo, {height: height * 0.35}]}
        resizeMode="contain"
        />

        
        <CustomInput placeholder="Nombre de Usuario" value={username} setValue={setUsername} secureTextEntry={false} />
        <CustomInput placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/>

        <CustomButton />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 400,
        maxHeight: 300,
    }
}
)

export default LogIn;