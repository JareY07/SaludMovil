import React from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style= {[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
  },
  container_PRIMARY: {
    width: '70%',
    height: '6.5%',
    backgroundColor: '#33BBC5',
    borderColor: '#41C2C5',
    borderWidth: 1,
  },
  container_TERTIARY: {
    borderColor: '#614bc3',
    // paddingLeft: '15%'
  },
  
  text_PRIMARY: {
    fontWeight: 'bold',
    color: '#F5F5F5',
    alignItems: 'center',
    paddingTop: '3%'
  },
  text_TERTIARY:{
    color: '#c8ffe0',
    paddingBottom: '4%',
  }
})

export default CustomButton;