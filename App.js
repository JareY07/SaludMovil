import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import LogIn from 'C:/Users/GWTC/Desktop/SaludMovil/src/screens/SignIn/LogIn';
import SignUp from 'C:/Users/GWTC/Desktop/SaludMovil/src/screens/SignUp/SignUp';

const App = () => {
  return(
    <SafeAreaView style={styles.root}>
      <SignUp />
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
