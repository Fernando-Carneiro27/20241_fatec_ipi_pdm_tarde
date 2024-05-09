import React, { useState } from 'react';
import { StatusBar, StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default function App() {
  const [state, setState] = useState({
    n1: null,
    n2: null,
    result: null
  });

  const Valor1 = (valor) => {
    setState({ ...state, n1: valor });
  };  

  const Valor2 = (valor) => {
    setState({ ...state, n2: valor });
  };

  const soma = () => {
    setState({ ...state, result: Number(state.n1) + Number(state.n2) });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.texto}
        onChangeText={text => Valor1(text)}
        value={state.n1}
      />
      <TextInput
        style={styles.texto}
        onChangeText={text => Valor2(text)}
        value={state.n2}
      />
      <Button
        style={styles.button}
        onPress={soma}
        title="Somar"
      />
      <Text 
        style={{fontFamily: 'arial', margin: 4}}>
          <b>Resultado: {state.result}</b>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    alignContent: 'center',
    margin: 4,
    height: 40,
    width: 200,
    borderColor: 'darkgreen',
    borderWidth: 2,
    backgroundColor: 'palegreen',
  },
  button: {
    margin: 4,
    width: 200,
    height: 40
  }
});
