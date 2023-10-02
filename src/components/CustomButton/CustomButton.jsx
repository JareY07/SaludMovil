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
    width: '80%',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    padding: 10
  },
  container_PRIMARY: {
    backgroundColor: '#614bc3',
    borderColor: '#41C2C5',
    borderWidth: 2,
  },
  container_SECONDARY: {
    borderColor: '#614bc3',
    borderWidth: 3,
  },
  container_TERTIARY: {
    borderColor: '#614bc3',
  },
  text_PRIMARY: {
    fontWeight: 'bold',
    color: '#f5f5f5',
    alignItems: 'center',
    paddingTop: '1%'
  },
  text_SECONDARY: {
    color: '#614bc3'
  },
  text_TERTIARY:{
    color: '#614bc3',
    paddingBottom: '4%',
  }
})

export default CustomButton;