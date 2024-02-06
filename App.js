import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png',
        }}
      />

      <View style={styles.contain}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.textInput} placeholder="Usuario" />
        <TextInput style={styles.textInput} placeholder="Senha" />
      </View>
      <View style={styles.contain_button}>
        <Button title="Entrar" color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    width: 300,
    borderRadius: 10,
    marginVertical: 30,
    padding: 40,
    gap: 30,
    backgroundColor: '#f7f7f7',
  },

  textInput: {
    fontSize: 15,
    padding: 15,
    borderBottomWidth: 1,
    height: 50,
    width: '100%',
  },

  title: {
    fontSize: 40,
  },
  img: {
    width: 300,
    height: 75,
  },

  contain_button: {
    width: 150,
  },
});
