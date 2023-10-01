import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

import Navigation from './src/Navigation';

const App = () => {
  return(
    <SafeAreaView style={styles.root}>
      <Navigation/>
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
