import React, { useState } from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import styles from './styles'

const EntradaDeDados = ({ handleRegister }) => {

    const [ lote, setLote ] = useState("")
    const [ desc, setDesc ] = useState("")
    const [ fabricante, setFabricante ] = useState("")


    function pegaLote(text){
        setLote(text)
    }
    function pegaDesc(text){
        setDesc(text)
    }
    function pegaFabricante(text){
        setFabricante(text)
    }
    function registerOnPresss(){
        if(lote && desc && fabricante){
            handleRegister(lote, desc, fabricante)
        }
    }

  return (
    <View style={styles.container}>
        <TextInput placeholder="Lote" style={styles.input} onChangeText={pegaLote}/>
        <TextInput placeholder="Farbicante" style={styles.input} onChangeText={pegaFabricante}/>
        <TextInput placeholder="Descrição" style={styles.input} onChangeText={pegaDesc}/>
        <TouchableHighlight style={styles.button} onPress={registerOnPresss}>
            <Text style={styles.label}>Cadastrar</Text>
        </TouchableHighlight>
    </View>
  );
}

export default EntradaDeDados;