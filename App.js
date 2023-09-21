import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import LogIn from 'C:/Users/GWTC/Desktop/SaludMovil/src/screens/LogIn.jsx';

const App = () => {
  return(
    <SafeAreaView style={styles.root}>
      <LogIn LogIn/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#614bc3',
  },
});

export default App;
