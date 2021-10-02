import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import EntradaDeDados from './src/Components/EntradaDeDados';
import ExibeVacinas from './src/Components/ExibeVacinas';

export default function App() {

  const [vacinas, setVacinas] = useState([])

  function handleRegister(lote, desc, fabricante) {
    const vacina  = {
      lote,
      desc,
      fabricante
    }
    setVacinas([...vacinas, vacina])
  }

  return (
    <View style={styles.container}>
      <EntradaDeDados handleRegister={handleRegister}/>
      <ExibeVacinas vacinas={vacinas}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
