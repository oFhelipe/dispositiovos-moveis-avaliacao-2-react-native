import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width:'90%',
        flexDirection:'column'
    },
    input: {
        width:'100%',
        height: 40,
        backgroundColor: '#fff',
        marginTop:10,
        paddingLeft: 8,
        borderWidth:0.7,
        borderRadius:5,
        borderColor:'#BCBCBC'
    },
    button: {
        width:'100%',
        height: 40,
        backgroundColor: '#7752CA',
        marginTop:10,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    label: {
        color:'#FFF',
        fontWeight:'bold'
    }
})

export default styles