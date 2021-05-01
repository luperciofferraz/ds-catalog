import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {

  return (

    <View style={styles.container}>

      <Text style={styles.h1}>Alo DevSuperior</Text>
      <Text style={styles.h2}>Lupércio</Text>
      <Text style={styles.h3}>Ferraz</Text>

    </View>
  )

}

const styles = StyleSheet.create({

  container: {

    //default: DisplayFlex

    backgroundColor: "#069",
    flex: 1,
    flexDirection: "column", //Default: column
    alignItems: "center", //Alinhamento Horizontal
    justifyContent: "center" //Alinhamento Vertical

  },

  h1: {

    fontSize: 24,
    fontWeight: "700",
    color: "#fff"

  },
  
  h2: {

    fontSize: 18,
    fontWeight: "500",
    color: "#fff"

  },
  
  h3: {

    fontSize: 14,
    fontWeight: "700",
    color: "#ccc"

  }

});


export default App;