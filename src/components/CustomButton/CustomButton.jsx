import React from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style= {styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33BBC5',
    width: '85%',
    height: '8.5%',
    padding: 10,
    borderColor: '#41C2C5',
    borderWidth: 1,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#F5F5F5',
  },
})

export default CustomButton;