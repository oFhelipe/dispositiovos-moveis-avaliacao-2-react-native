import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

function VacinaCard({vacina}) {
    const {lote, desc, fabricante} = vacina
    return (
        <View style={styles.container}>
            <Text>Lote: {lote}</Text>
            <Text>Fabricante: {fabricante}</Text>
            <Text>Descrição: {desc}</Text>
        </View>
    )
}

export default VacinaCard
