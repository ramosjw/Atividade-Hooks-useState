import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        placeholderTextColor="#999" // Cor do texto do placeholder
        underlineColorAndroid="transparent" // Remove a linha padrão do Android
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        placeholderTextColor="#999" // Cor do texto do placeholder
        underlineColorAndroid="transparent" // Remove a linha padrão do Android
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#999" // Cor do texto do placeholder
        underlineColorAndroid="transparent" // Remove a linha padrão do Android
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999" // Cor do texto do placeholder
        underlineColorAndroid="transparent" // Remove a linha padrão do Android
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999" // Cor do texto do placeholder
        underlineColorAndroid="transparent" // Remove a linha padrão do Android
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#999" // Cor do texto do placeholder
        underlineColorAndroid="transparent" // Remove a linha padrão do Android
      />
      <TextInput
        style={styles.input}
        placeholder="Idioma do currículo"
        placeholderTextColor="#999" // Cor do texto do placeholder
        underlineColorAndroid="transparent" // Remove a linha padrão do Android
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
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
  input: {
    borderBottomWidth: 1, // Espessura da linha
    borderBottomColor: '#ccc', // Cor da linha
    width: '80%', // Largura do input
    fontSize: 16, // Tamanho da fonte
    padding: 10, // Espaçamento interno
    marginBottom: 20, // Espaçamento inferior
  },
  button: {
    backgroundColor: '#3498db', // Cor de fundo azul claro
    padding: 15, // Espaçamento interno
    width: '80%',
    borderRadius: 5, // Borda arredondada
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 18, // Tamanho da fonte do texto do botão
    fontWeight: "bold",
    textAlign: 'center',
  },
});
