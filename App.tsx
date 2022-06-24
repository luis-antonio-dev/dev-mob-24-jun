/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const App = () => {
  const [text, setText] = useState(String());

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder="Digite aqui seu texto."
      />

      <Text style={styles.resultText}>
        Quantidade de caracteres: {text.length}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 50,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    backgroundColor: 'black',
    width: '100%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  resultText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default App;
