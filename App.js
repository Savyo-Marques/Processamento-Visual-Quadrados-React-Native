import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <Text style={styles.titulo}>Squade 1</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.titulo}>Squade 2</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.titulo}>Squade 3</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F4F4F',

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container1:{
    backgroundColor:'#fff',

    width: 120,
    height:100,
    margin: 8,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },

  container2:{
    backgroundColor:'#DDA0DD',

    width: 120,
    height:100,
    margin: 8,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },

  container3:{
    backgroundColor:'#FA8072',

    width: 120,
    height:100,
    margin: 8,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    fontSize: 18,
    fontWeight: 'bold',
  },

});
