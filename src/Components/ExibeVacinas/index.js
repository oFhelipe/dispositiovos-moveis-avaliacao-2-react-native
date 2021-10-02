import React from 'react';
import {View, Text, FlatList} from 'react-native';
import VacinaCard from '../VacinaCard';
import styles from './styles'

class ExibeVacinas extends React.Component {
  render() {
    return (
      <View style={styles.container}>
           {
            this.props.vacinas && this.props.vacinas.length ?
            <FlatList 
              data={this.props.vacinas}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => {
                  return <VacinaCard vacina={item}/>
              }}/>
            :
            <Text style={styles.semVanicaText}>Nenhuma vacina disponivel no momento</Text>
      }
      </View>
    );
  }
}
export default ExibeVacinas;